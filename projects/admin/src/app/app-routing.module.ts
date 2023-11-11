import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
const routes: Routes = [{
  path: 'admin/product', component: ProductComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
    NgxPaginationModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
