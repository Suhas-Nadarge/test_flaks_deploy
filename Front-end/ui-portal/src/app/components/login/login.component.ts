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
  showLoginError = false;
  constructor(private fb:FormBuilder,public router:Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    
  }


  Validate(email:string,password:string){
    this.showLoginError = false;
    let requestObj = {email:email,password:password}

    this.loginService.loginUser(requestObj).subscribe((data:any) => {
      if(data['status'] === 'success'){
        this.router.navigate(['/home'])
      } else {
        this.showLoginError = true;
        this.router.navigate(['/home'])
      }
      console.log(data);
    },
    (err: any)=>{
    console.log(err['error']['message'])
    this.router.navigate(['/home'])
    });

}


showWarning(err: any) {
  // this.toastr.warningToastr(err, 'Alert!',{toastTimeout:6000});
}


showError(err: any) {
// this.toastr.errorToastr(err, 'Oops!',{toastTimeout:6000});
}

}
