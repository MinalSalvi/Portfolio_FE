import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';
import { ResearchComponent } from './research/research.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { PublicationComponent } from './publication/publication.component';
import { PublishedComponent } from './published/published.component';
import { LiveTVComponent } from './live-tv/live-tv.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { FooterComponent } from './footer/footer.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { NewReserachComponent } from './NEW/new-reserach/new-reserach.component';
import { AddChnagesComponent } from './NEW/add-chnages/add-chnages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import {ToastrModule} from 'ngx-toastr';

import { AuthHomeComponent } from './auth-home/auth-home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdatePopupComponent } from './update-popup/update-popup.component';
import { AuthComponent } from './gaurd/auth/auth.component';
import { GalleryComponent } from './gallery/gallery.component';





@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AboutComponent,
    ResearchComponent,
    ScholarshipsComponent,
    PublicationComponent,
    PublishedComponent,
    LiveTVComponent,
    NewsPaperComponent,
    FooterComponent,
    DashboardComponent,
    EducationComponent,
    NewReserachComponent,
    AddChnagesComponent,
   
    AuthHomeComponent,
         RegisterComponent,
         LoginComponent,
         UpdatePopupComponent,
         AuthComponent,
         GalleryComponent,
   
   
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
