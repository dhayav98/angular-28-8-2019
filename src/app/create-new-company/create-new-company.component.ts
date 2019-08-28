import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { CompanyService } from '../service/company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-new-company',
  templateUrl: './create-new-company.component.html',
  styleUrls: ['./create-new-company.component.css']
})
export class CreateNewCompanyComponent implements OnInit {

  constructor(private router: Router, private companyService:CompanyService) {}

  ngOnInit() {
  }
  createCompany(companyForm:NgForm):void
  {
    console.log(companyForm.value);
    this.companyService.createCompany(companyForm.value)
    .subscribe(data=>{
      alert("company created successfully!!!!");
      this.router.navigate(['/list-company-details'])
    });
  }
}
