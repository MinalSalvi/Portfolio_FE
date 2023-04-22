import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators} from '@angular/forms'
import { ToastrService} from 'ngx-toastr'
import { AuthService } from '../service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private builder:FormBuilder, private toastr:ToastrService,
  private service:AuthService, private router:Router ){

}

registerform=this.builder.group({
  id:this.builder.control('', Validators.compose([Validators.required,Validators.minLength(3)]),
  ),
  Name:this.builder.control('',Validators.required),
  Password:this.builder.control('', Validators.compose([Validators.required,Validators.pattern('')])),
  Email:this.builder.control('', Validators.compose([Validators.required,Validators.email])),
  gender:this.builder.control('Male'),
  role:this.builder.control(''),
  isactive:this.builder.control(false),
});

proceedRegsitration(){
  if(this.registerform.valid){
    this.service.Proceedregister(this.registerform.value).subscribe(res=> {
      this.toastr.success('Registration is sucessfull', 'contact admin for the allowance of acess');
      this.router.navigate(['login']);
    });
  }else{
this.toastr.warning('Please enter valid data');
  }
}

}
