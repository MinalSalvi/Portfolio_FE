import { Component } from '@angular/core';
import { PortfolioDataService } from '../services/portfolio-data.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class APITestComponent {

  port:any;
 
  constructor(private Info:PortfolioDataService)
  {
    console.warn("Info",Info.port())
    this.port=Info.port();
  }
}
