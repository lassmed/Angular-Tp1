import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { MiniWordComponent } from './mini-word/mini-word.component';

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
    //HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
