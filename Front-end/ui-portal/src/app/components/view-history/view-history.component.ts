import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.scss']
})
export class ViewHistoryComponent implements OnInit {
  displayStyle!: string;
  historyList =['1ssssss','1ssssssss','1sssssssss','1sssssssssssssssssssssss']

  constructor() { }
  emailTemplate = '"<p><b>Hello Sir/Madam,</b><br><br>We at&#160;<b>Fevino&#160;Industries LLP</b>&#160;are one of the top leading manufacturer of&#160;<b>Sanitary Napkin Vending Machine</b>&#160;in India, Located at Pune. One of our workshops is specialized in manufacturing&#160;<b>Indias first Solar Power&#160;</b>based vending machine. Using the latest technology we deliver incredible efficiency, without sacrificing application performance. Our Sanitary napkin vending machine are an ideal for&#160;<b>Schools, Colleges, Hospitals,Corporate Offices, Hostels</b>&#160;and can provide increased value. We can supply not only a complete vending machine but also the customization as per client requirement.</p><br><h1>Thanks &amp; Regards,</h1><br><br><table width=\"500\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td valign=\"top\" width=\"100\"><img alt=\"   SANITARYWARE \" width=\"100\" src=\"https://ci3.googleusercontent.com/proxy/SBca_Jhg4LZwRDWPq6FvLM-X6JUNPmMon-H4eVK0sLmSEw1Q9UCXu6hwKJg_DoWapEyYZ0hFdGvvZMytW9j6IaH1g94yCFeCwKQ5tJM9Rd9TIIEIrUDRSse69Yxet8FSPpcUhoQiCjS-Q6kdC7s=s0-d-e1-ft#https://img.mysignature.io/p/0/6/5/065c52b2-f0cd-5f15-9133-a3b72f37b708.png?time=1570383449\" class=\"CToWUd\"></td><td valign=\"top\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody><tr><td>FEVINO&#160;INDUSTRIES</td></tr><tr><td>SANITARYWARE</td></tr><tr><td>Mobile:&#160;&#160;<a href=\"tel:%208180836026%20/%208389898952\" target=\"_blank\">8180836026 / 8389898952</a></td></tr><tr><td>Website:&#160;&#160;<a href=\"https://www.fevino.in/\" target=\"_blank\">www.fevino.in</a></td></tr><tr><td>Email:&#160;&#160;<a href=\"mailto:+info.fevino@gmail.com\" target=\"_blank\">info.fevino@gmail.com</a></td></tr><tr><td>Address:&#160;&#160;Sr. No.36/1/1 Near Lokmat Press, Sinhgad Rd, Vadgaon Khurd, Pandurang Industrial Area, Pune, Maharashtra 411041</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>'

  ngOnInit(): void {
  }

  showView(): any{

  }
  openPopup(i: any) {
  this.emailTemplate = this.historyList[i];
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  deleteRecord(i:any) {

  }
}
