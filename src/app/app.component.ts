import { Component } from '@angular/core';
import{PortfolioDataService} from './services/portfolio-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  // port:any;
 
  // constructor(private Info:PortfolioDataService)
  // {
  //   console.warn("Info",Info.port())
  //   this.port=Info.port();
  // }
}
