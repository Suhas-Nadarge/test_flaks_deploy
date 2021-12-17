import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public _http: HttpClient) { }
  SendEmail(requestObj: any): any {
    return this._http.post('http://127.0.0.1:5000/send_email', requestObj,this.httpOptions);
  }
}
