import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashBoardsService } from '../dash-boards.service';
import { CreateOrUpdate } from '../create-or-update';
 

@Component({
  selector: 'app-edit-r',
  templateUrl: './edit-r.component.html',
  styleUrls: ['./edit-r.component.css']
})
export class EditRComponent implements OnInit {


constructor(private route:ActivatedRoute, private dashboardsService:DashBoardsService) { }

iteamid:string="";

newcreateorupdate:CreateOrUpdate={
  Title:'',
  Organisation:'',
  Status:'',
  Year:'',
 };


  ngOnInit(): void {
   this.route.paramMap.subscribe((params)=> {
    this.iteamid = params.get('Edit-R/:id') ?? "";
   this.getById();
   });
  }


  getById(){
    this.dashboardsService.getById(this.iteamid).subscribe((data)=> {
      this.newcreateorupdate.Title=data.Title;
      this.newcreateorupdate.Organisation=data.Organisation;
      this.newcreateorupdate.Status=data.Status;
    })
  }

  update(){
    this.dashboardsService.update(this.dashboards).subscribe((date) =>{
      
    })
  }

 
}


