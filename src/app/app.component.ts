import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exchange Market';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/exchange', icon: 'euro_symbol', title: 'Exchange' },
    { path: '/crypto', icon: 'payment', title: 'Crypto'},
    { path: '/currency', icon: 'price_change', title: 'Currecny'},
  ];


  logout(){
    console.log("log out");
  }
}
