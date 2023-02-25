import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor() { }
  port()
  {
    return[
    
        {Nav:'About' , text:'this is an example of text from the about component', Heading:'AboutHeading'},
      
        {Nav:'Education' , text:'this is an example of text from the Education component', Heading:'EducationHeading'},
      
        {Nav:'Home' , text:'this is an example of text from the Home component', Heading:'HomeHeading'},
      
        {Nav:'News-paper' , text:'this is an example of text from the News-paper component', Heading:'News-paperHeading'},
      
        {Nav:'Publication' , text:'this is an example of text from the Publication component', Heading:'PublicationHeading'},
      
        {Nav:'Reserach' , text:'this is an example of text from the Reserachcomponent', Heading:'ReserachHeading'},
      
    ]
  }
}
