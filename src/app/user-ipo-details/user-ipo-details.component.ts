import { Component, OnInit } from '@angular/core';
import { IpoService } from '../service/ipo.service';


@Component({
  selector: 'app-user-ipo-details',
  templateUrl: './user-ipo-details.component.html',
  styleUrls: ['./user-ipo-details.component.css']
})
export class UserIpoDetailsComponent implements OnInit {

  ipoDetails:string[];
  constructor(private ipoService:IpoService) { }

  ngOnInit() {
    this.ipoService.getIpoDetails().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response)
  {
    console.log("ipo details:"+response);
    this.ipoDetails=response;
  }
}
