import { Component, OnInit } from '@angular/core';
import { EditorConfig } from 'src/app/constant';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  editorConfig = EditorConfig
  constructor() { }

  ngOnInit(): void {
  }

}
