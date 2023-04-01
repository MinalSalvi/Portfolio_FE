import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { APITestComponent } from './api-test/api-test.component';
import { HomeComponent } from './home/home.component';
import { LiveTVComponent } from './live-tv/live-tv.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { PublicationComponent } from './publication/publication.component';
import { PublishedComponent } from './published/published.component';
import { ResearchComponent } from './research/research.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { SRBannerComponent } from './sr-banner/sr-banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';

const approutes: Routes = [

  {path:'', component:HomeComponent},
  // {path:'Home', component:HomeComponent},
  {path:'Education', component:EducationComponent},
  {path:'About', component:AboutComponent},
  {path:'Research', component:ResearchComponent},
  {path:'Education', component:SRBannerComponent},

  {path:'Scholarship', component:ScholarshipsComponent},
  {path:'Publication', component:PublicationComponent},
  {path:'Published', component:PublishedComponent},
  {path:'Live_TV', component:LiveTVComponent},
  {path:'NewsPaper', component:NewsPaperComponent},
  {path:'login-page', component:LoginPageComponent},
  {path: 'Dashboard' , component:DashboardComponent},
  // {path:'login-page', component:APITestComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
