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
  constructor(private fb:FormBuilder,public router:Router) { }

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
this.router.navigate(['/home'])
}


showWarning(err: any) {
  // this.toastr.warningToastr(err, 'Alert!',{toastTimeout:6000});
}


showError(err: any) {
// this.toastr.errorToastr(err, 'Oops!',{toastTimeout:6000});
}

}
