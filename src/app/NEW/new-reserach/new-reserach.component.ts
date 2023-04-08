import { DashBoards } from '../dash-boards';
import { DashBoardsService } from './../dash-boards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-reserach',
  templateUrl: './new-reserach.component.html',
  styleUrls: ['./new-reserach.component.css']
})
export class NewReserachComponent implements OnInit {
 

  constructor (private DashBoardsService:DashBoardsService) { }
testdashboard:DashBoards []=[];


ngOnInit(): void {
  this.getAll();
}

getAll(){
  this.DashBoardsService.get().subscribe((data)=>{
    this.testdashboard = data;

  })
}




}

