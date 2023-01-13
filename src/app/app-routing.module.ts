import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LiveTVComponent } from './live-tv/live-tv.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { PublicationComponent } from './publication/publication.component';
import { PublishedComponent } from './published/published.component';
import { ResearchComponent } from './research/research.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { SRBannerComponent } from './sr-banner/sr-banner.component';

const approutes: Routes = [

  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Research', component:ResearchComponent},
  {path:'Education', component:SRBannerComponent},

  {path:'Scholarship', component:ScholarshipsComponent},
  {path:'Publication', component:PublicationComponent},
  {path:'Published', component:PublishedComponent},
  {path:'Live_TV', component:LiveTVComponent},
  {path:'NewsPaper', component:NewsPaperComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
