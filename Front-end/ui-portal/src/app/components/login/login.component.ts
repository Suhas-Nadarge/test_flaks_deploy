import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor(private fb:FormBuilder,public router:Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    
  }


  Validate(username:string,password:string){
    this.loginService.loginUser({email:'Demo Email',password:'demopass'}).subscribe((data:any) => {
      console.log(data);
    });

this.router.navigate(['/home'])
}


showWarning(err: any) {
  // this.toastr.warningToastr(err, 'Alert!',{toastTimeout:6000});
}


showError(err: any) {
// this.toastr.errorToastr(err, 'Oops!',{toastTimeout:6000});
}

}
