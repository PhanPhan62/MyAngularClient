import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    title: 'Quản lý Sản phẩm',
    path: 'admin/product',
    component: ProductComponent,
  },
  {
    title: 'Quản lý',
    path: '',
    component: DashboardComponent,
  },
  {
    title: 'Quản lý Đơn hàng',
    path: 'admin/orders',
    component: OrdersComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
    NgxPaginationModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
