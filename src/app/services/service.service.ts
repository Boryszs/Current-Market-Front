import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  exchangePlAll(){
    return this.http.get<any[]>(BASE_URL+"exchange/pl/all"); 
  }

  exchangeWAll(){
    return this.http.get<any[]>(BASE_URL+"exchange/w/all"); 
  }

  cryptoImportnant(){
    return this.http.get<any[]>(BASE_URL+"crypt-currency/important"); 
  }

  currencyAll(){
    return this.http.get<any[]>(BASE_URL+"currency/all"); 
  }
}


