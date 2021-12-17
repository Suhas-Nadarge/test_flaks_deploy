import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  historyList =[1,2,4,5,6,7,8,9,8,8]

}
