import { dashboards } from './../../../../../Portfolio_BE/src/dashboard/schema/dashboard.schema';
import { Delete } from '@nestjs/common';
import { DashBoards } from '../dash-boards';
import { DashBoardsService } from './../dash-boards.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare var window:any;

@Component({
  selector: 'app-new-reserach',
  templateUrl: './new-reserach.component.html',
  styleUrls: ['./new-reserach.component.css']
})
export class NewReserachComponent implements OnInit {
  itemId: string | undefined;
  DashBoards: any;

  constructor (
    private DashBoardsService:DashBoardsService,
    private router:Router) { }
testdashboard:DashBoards []=[];

iteamToDelet:string = '';
deleteModal:any;

ngOnInit(): void {
this.deleteModal = new window.bootstrap.Modal(
  document.getElementById("deleteModal")
);
  this.getAll();
}

getAll(){
  this.DashBoardsService.get().subscribe((data)=>{
    this.testdashboard = data;

  })
}



openDeletePopup(id:string){
this.iteamToDelet=id;
this.deleteModal.show();
}


delet(){
  this.DashBoardsService.delete(this.iteamToDelet).subscribe(()=>{
    this.DashBoards = this.testdashboard.filter(_ => _._id !== this.iteamToDelet);
    this.deleteModal.hide();
  })
}


}

 