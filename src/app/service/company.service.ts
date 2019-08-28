import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Company {
  constructor(
  public id:number,
  public companyName:String,
  public turnOver:number,
  public ceo:String,
  public boardOfDirectors:String,
  public sectorId:number,
  public briefWriteUp:String,
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) {

   }
   getCompanies()
   {
     console.log("test call");
     return this.httpClient.get<Company[]>('http://localhost:9090/company-list')
   }
   createCompany(company)
   {
     return this.httpClient.post<Company>("http://localhost:9090/company-insert-page",company);
   }
}
