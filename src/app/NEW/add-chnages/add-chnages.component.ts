import { Router } from '@angular/router';
import { DashBoardsService } from './../dash-boards.service';
import { Component, OnInit } from '@angular/core';
import { CreateOrUpdate } from '../create-or-update';


@Component({
  selector: 'app-add-chnages',
  templateUrl: './add-chnages.component.html',
  styleUrls: ['./add-chnages.component.css']
})
export class AddChnagesComponent implements OnInit{
constructor(
  private DashBoardsService:DashBoardsService, private router:Router
  ){}
  ngOnInit(): void {}
  create(){
    this.DashBoardsService.create(this.newcreateorupdate).subscribe(() =>{
      this.router.navigate(['/']);
    });
  }

 newcreateorupdate:CreateOrUpdate={
  Title:'',
  Organisation:'',
  Status:'',
  Year:'',
 };


}
