import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../services/service.service';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSourceCurrencyC;
  dataSourceCurrency;
  dataSourceExchangePl;
  dataSourceExchangeW;
  displayedColumnsCurrencyC: string[] = ['name', 'course', 'value', 'change'];
  displayedColumnsCurrency: string[] = ['country', 'name', 'symbol', 'exchange','percentage change'];
  displayedExchange: string[] = ['name', 'course', 'change', 'changePercentages','open','max','min','time'];
  constructor(private service :ServiceService) { }

  ngOnInit(): void {
    this.service.crypto5Importnant().subscribe(data => this.dataSourceCurrencyC = data)
    this.service.currency5All().subscribe(data => this.dataSourceCurrency = data)
    this.service.exchange5PlAll().subscribe(data => this.dataSourceExchangePl = data)
    this.service.exchange5WAll().subscribe(data => this.dataSourceExchangeW = data)
  }

}
