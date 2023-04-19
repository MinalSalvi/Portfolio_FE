// import { AuthService } from './../../../../../Portfolio_BE/src/jwt/src/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginPageModel } from '../login-page-model';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService:AuthService){}
  ngOnInit(): void {
     
  }
  loginpageForm:LoginPageModel={
    username:'',
    password:''
  };

  userLogin(){
    this.authService.userLogin(this.loginpageForm).subscribe((data) =>{
      if(data){
        alert("sucess");
      }
      else{
        alert("failer");
      }
    })
  }
}
