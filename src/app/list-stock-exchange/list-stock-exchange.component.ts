import { Component, OnInit } from '@angular/core';
import {StockExchangeService} from '../service/stock-exchange.service';

@Component({
  selector: 'app-list-stock-exchange',
  templateUrl: './list-stock-exchange.component.html',
  styleUrls: ['./list-stock-exchange.component.css']
})
export class ListStockExchangeComponent implements OnInit {
  stockExchange:String[]
  constructor(private stockExchangeService:StockExchangeService) { }

  ngOnInit( ) {
    this.stockExchangeService.getStockExchange().subscribe(
      response =>{
        return this.handleSuccessfulResponse(response);
      });
  }
  handleSuccessfulResponse(response)
  {
    this.stockExchange=response;
  }
}


