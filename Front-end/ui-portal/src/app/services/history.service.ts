import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(public _http: HttpClient) { }
  getAllHistory(username: any): any {
    return this._http.post('http://127.0.0.1:5000/get_history', {username:username},this.httpOptions);
  }

  deleteHistory(requestObj: any): any {
    return this._http.post('http://127.0.0.1:5000/delete_history', requestObj,this.httpOptions);
  }
}
