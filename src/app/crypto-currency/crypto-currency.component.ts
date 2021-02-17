import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {ServiceService} from '../services/service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements AfterViewInit,OnInit{

  displayedColumns: string[] = ['name', 'course', 'value', 'change'];
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
    this.service.cryptoImportnant().subscribe(data => this.dataSource.data = data); 
  }

  ngOnInit(): void {
  }

}
