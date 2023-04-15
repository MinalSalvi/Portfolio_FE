import { DashBoards } from '../dash-boards';
import { DashBoardsService } from './../dash-boards.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reserach',
  templateUrl: './new-reserach.component.html',
  styleUrls: ['./new-reserach.component.css']
})
export class NewReserachComponent implements OnInit {
  itemId: string | undefined;

  constructor (
    private DashBoardsService:DashBoardsService,
    private router:Router) { }
testdashboard:DashBoards []=[];


ngOnInit(): void {
  this.itemId= this.router.url.split('/').pop();
  this.getAll();
}

getAll(){
  this.DashBoardsService.get().subscribe((data)=>{
    this.testdashboard = data;

  })
}

deleteItem(id:string):void{
  this.DashBoardsService.deletExample(id).subscribe(()=>{
    window.alert('sudcess!');
  },
  (error)=>{
    window.alert('not sucess')
  }
  );
}



}

