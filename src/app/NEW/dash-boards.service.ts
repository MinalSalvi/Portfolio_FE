import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashBoards } from './dash-boards';


@Injectable({
  providedIn: 'root'
})
export class DashBoardsService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<DashBoards[]>("http://localhost:3000/dashboard")
  }
}
