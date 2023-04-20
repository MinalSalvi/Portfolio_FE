import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewReserachComponent } from './NEW/new-reserach/new-reserach.component';
import { LiveTVComponent } from './live-tv/live-tv.component';

import { NewsPaperComponent } from './news-paper/news-paper.component';
import { PublicationComponent } from './publication/publication.component';
import { PublishedComponent } from './published/published.component';
import { ResearchComponent } from './research/research.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { AddChnagesComponent } from './NEW/add-chnages/add-chnages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';



const approutes: Routes = [
  { path: 'Education', component: EducationComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Research', component: ResearchComponent },
  { path: 'Scholarship', component: ScholarshipsComponent },
  { path: 'Publication', component: PublicationComponent },
  { path: 'Published', component: PublishedComponent },
  { path: 'Live_TV', component: LiveTVComponent },
  { path: 'NewsPaper', component: NewsPaperComponent },
 
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'addChanges', component: AddChnagesComponent },
  { path: 'Hello', component: NewReserachComponent },
  // { path: 'NewResearch' , component:NewReserachComponent}
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'user', component:UserlistingComponent},
  { path:'home', component:AuthHomeComponent}

 


];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
