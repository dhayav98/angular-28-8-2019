import { Component, OnInit } from '@angular/core';
import { IpoService } from '../service/ipo.service';

@Component({
  selector: 'app-list-ipo-details',
  templateUrl: './list-ipo-details.component.html',
  styleUrls: ['./list-ipo-details.component.css']
})
export class ListIpoDetailsComponent implements OnInit {

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

