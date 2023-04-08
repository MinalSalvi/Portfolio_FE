import { Component } from '@angular/core';
import { PortfolioDataService } from './services/portfolio-data.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Portfolio';
  constructor(private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {

    console.log(this.router.url , "check the url");
    console.log(this.route.snapshot.routeConfig?.path, "checked urs2");

  }
}




