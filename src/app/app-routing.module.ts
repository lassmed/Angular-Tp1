import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CvComponent} from "./cv/cv/cv.component";
import {MiniWordComponent} from "./mini-word/mini-word.component";
import {CvPageComponent} from "./cv/cv-page/cv-page.component";
import {MergeScanReduceComponent} from "./merge-scan-reduce/merge-scan-reduce.component";
import {ProductsComponent} from "./products/products.component";
import {CvLayoutComponent} from "./cv/cv-layout/cv-layout.component";
import {ListCvComponent} from "./cv/list-cv/list-cv.component";
import {CvPageResolver} from "./resolvers/cv-page.resolver";
import {CvResolver} from "./resolvers/cv.resolver";
import {AddCvComponent} from "./cv/add-cv/add-cv.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: CvComponent , resolve: {personnes: CvResolver}},
  { path: 'cv', component: CvComponent,resolve: {personnes: CvResolver}},
  { path: 'cv/add', component: AddCvComponent },
  { path: 'cv/:id', component: CvPageComponent ,resolve: { personne: CvPageResolver }},



  { path: 'list' ,
    component: CvLayoutComponent,
    resolve: {personnes: CvResolver},
    children:[
      { path: ':id' ,
        component: CvPageComponent,
        resolve: {personne: CvPageResolver}
      },
    ]
  },

  { path: 'miniword', component: MiniWordComponent },
  { path: 'msr', component: MergeScanReduceComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
