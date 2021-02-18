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

  exchange5PlAll(){
    return this.http.get<any[]>(BASE_URL+"exchange/pl/all/5"); 
  }

  exchangeWAll(){
    return this.http.get<any[]>(BASE_URL+"exchange/w/all"); 
  }

  exchange5WAll(){
    return this.http.get<any[]>(BASE_URL+"exchange/w/all/5"); 
  }

  cryptoImportnant(){
    return this.http.get<any[]>(BASE_URL+"crypt-currency/important"); 
  }

  crypto5Importnant(){
    return this.http.get<any[]>(BASE_URL+"crypt-currency/important/5"); 
  }

  currencyAll(){
    return this.http.get<any[]>(BASE_URL+"currency/all"); 
  }

  currency5All(){
    return this.http.get<any[]>(BASE_URL+"currency/all/5"); 
  }

}


