import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    title: 'Trang chủ',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'Chi tiết sản phẩm',
    path: 'productDetail/:id',
    component: ProductDetailComponent,
  },
  {
    title: 'Sản phẩm',
    path: 'product',
    component: ProductComponent,
  },
  {
    title: 'Giỏ hàng',
    path: 'cart',
    component: CartComponent,
  },
  {
    title: 'Đăng nhâp',
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxPaginationModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
