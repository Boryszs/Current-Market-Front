import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoCurrencyComponent } from './crypto-currency/crypto-currency.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'crypto', component: CryptoCurrencyComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
