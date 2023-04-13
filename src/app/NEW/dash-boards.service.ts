
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashBoards } from './dash-boards';
import { CreateOrUpdate } from './create-or-update';


@Injectable({
  providedIn: 'root'
})
export class DashBoardsService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<DashBoards[]>("http://localhost:3000/dashboard")
  }

  create(DashBoards:CreateOrUpdate){
    return this.http.post("http://localhost:3000/dashboard", DashBoards);

  }

  getById(id: string) {
    return this.http.get<DashBoards>(`http://localhost:3000/dashboard/${id}`);
  }   

  update(id: string , dashboard: CreateOrUpdate){
    return this.http.put(`http://localhost:3000/dashboard/${id}` , dashboard);
  }

  
}
 