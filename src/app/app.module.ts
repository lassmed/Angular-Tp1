import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { ListCvComponent } from './cv/list-cv/list-cv.component';
import { ItemCvComponent } from './cv/item-cv/item-cv.component';
import {CommonModule} from "@angular/common";
import { DefaultImagePipe } from './cv/default-image.pipe';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CvPageComponent } from './cv/cv-page/cv-page.component';
import {HttpClient,HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthService} from "./cv/auth.service";
import { AutocompleteComponent } from './cv/autocomplete/autocomplete.component';
import { MergeScanReduceComponent } from './merge-scan-reduce/merge-scan-reduce.component';
import { ProductsComponent } from './products/products.component';
import { CvLayoutComponent } from './cv/cv-layout/cv-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailsCvComponent,
    ListCvComponent,
    ItemCvComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    LoginComponent,
    HeaderComponent,
    MiniWordComponent,
    CvPageComponent,
    AutocompleteComponent,
    MergeScanReduceComponent,
    ProductsComponent,
    CvLayoutComponent,
    //HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
