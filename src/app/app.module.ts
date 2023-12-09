import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/components/cv/cv.component';
import { DetailsCvComponent } from './cv/components/details-cv/details-cv.component';
import { ListCvComponent } from './cv/components/list-cv/list-cv.component';
import { ItemCvComponent } from './cv/components/item-cv/item-cv.component';
import {CommonModule} from "@angular/common";
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { EmbaucheComponent } from './cv/components/embauche/embauche.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./auth/login/login.component";
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { CvPageComponent } from './cv/components/cv-page/cv-page.component';
import {HttpClient,HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthService} from "./cv/services/auth.service";
import { AutocompleteComponent } from './cv/components/autocomplete/autocomplete.component';
import { MergeScanReduceComponent } from './merge-scan-reduce/merge-scan-reduce.component';
import { ProductsComponent } from './products/products.component';
import { CvLayoutComponent } from './cv/components/cv-layout/cv-layout.component';
import { AddCvComponent } from './cv/components/add-cv/add-cv.component';
import {LoginInterceptorProvider} from "./interceptors/login.interceptor";
import {UnsavedChangesGuard} from "./guards/unsavedChnages.guard";
import {LoginGuard} from "./guards/login.guard";
import {CvModule} from "./cv/cv.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiniWordComponent,
    MergeScanReduceComponent,
    ProductsComponent,
    //HeaderComponent
  ],
  imports: [
    CvModule,
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
    LoginGuard,
    AuthService,
    provideClientHydration(),
    LoginInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
