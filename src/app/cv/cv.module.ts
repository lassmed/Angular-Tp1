import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddCvComponent} from "./components/add-cv/add-cv.component";
import {CvComponent} from "./components/cv/cv.component";
import {ListCvComponent} from "./components/list-cv/list-cv.component";
import {ItemCvComponent} from "./components/item-cv/item-cv.component";
import {DetailsCvComponent} from "./components/details-cv/details-cv.component";
import {CvPageComponent} from "./components/cv-page/cv-page.component";
import {AutocompleteComponent} from "./components/autocomplete/autocomplete.component";
import {EmbaucheComponent} from "./components/embauche/embauche.component";
import {DefaultImagePipe} from "./pipes/default-image.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CvLayoutComponent} from "./components/cv-layout/cv-layout.component";


function CvRoutingModule() {

}

@NgModule({
  declarations: [
    AddCvComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailsCvComponent,
    CvPageComponent,
    AutocompleteComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    CvLayoutComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class CvModule { }
