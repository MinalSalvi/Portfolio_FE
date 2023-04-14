import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
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
import { LoginPageComponent } from './login-page/login-page.component';
import { APITestComponent } from './api-test/api-test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { NewReserachComponent } from './NEW/new-reserach/new-reserach.component';
import { AddChnagesComponent } from './NEW/add-chnages/add-chnages.component';
import { DashBoards } from './NEW/dash-boards';




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
    LoginPageComponent,
    APITestComponent,
    DashboardComponent,
    EducationComponent,
    NewReserachComponent,
    AddChnagesComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
