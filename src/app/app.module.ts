import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AboutComponent } from './about/about.component';
import { SRBannerComponent } from './sr-banner/sr-banner.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    AboutComponent,
    SRBannerComponent,
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
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
