import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-list-company-details',
  templateUrl: './list-company-details.component.html',
  styleUrls: ['./list-company-details.component.css']
})
export class ListCompanyDetailsComponent implements OnInit {
  companies:string[];
  constructor(private companyService:CompanyService
    ) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response)
  {
    console.log(response);
    this.companies=response;
  }

}



