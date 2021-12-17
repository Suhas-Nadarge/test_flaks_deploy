import { SendEmailService } from './../../services/send-email.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditorConfig } from 'src/app/constant';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  editorConfig = EditorConfig
  emailForm!: FormGroup;
  constructor(private fb:FormBuilder,public router:Router, public emailService: SendEmailService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.emailForm = this.fb.group({
      subject:['',Validators.required],
      recipients:['',Validators.required],
      email_body:['',Validators.required],
    })
  }

  sendEmail(){
    this.emailService.SendEmail(this.emailForm?.value).subscribe((data:any) => {
      console.log(JSON.stringify(data));
      this.emailForm?.reset();
    });
  }
}
