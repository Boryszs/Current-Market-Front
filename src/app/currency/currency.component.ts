import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {ServiceService} from '../services/service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['country', 'name', 'symbol', 'exchange','percentage change'];
  dataSource = new MatTableDataSource();

  constructor(private service :ServiceService) {}

  @ViewChild(MatPaginator) 
  paginator: MatPaginator;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getCrypto(); 
  }

  public doFilter(value: string){
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getCrypto(){
    this.service.currencyAll().subscribe(data => this.dataSource.data = data); 
  }

  ngOnInit(): void {
  }
}


