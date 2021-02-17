import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {ServiceService} from '../services/service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['name', 'course', 'change', 'changePercentages','open','max','min','time'];
  dataSourcePl = new MatTableDataSource();
  dataSourceW = new MatTableDataSource();

  constructor(private service :ServiceService) {
  }

  @ViewChild('paginator') 
  paginator: MatPaginator;
  @ViewChild('paginator2') 
  paginator2: MatPaginator;

  ngAfterViewInit() {
    this.dataSourcePl.paginator = this.paginator;
    this.dataSourceW.paginator = this.paginator2;
    this.getExchange(); 
  }

  ngOnInit(): void {
  }

  getExchange(): void{
    this.service.exchangeWAll().subscribe(dataW => this.dataSourceW.data = dataW); 
    this.service.exchangePlAll().subscribe(dataP => this.dataSourcePl.data = dataP); 
  }
}