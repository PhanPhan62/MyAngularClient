import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // title = 'Sản phẩm';
  public url = 'http://localhost:3000';
  showCategory: string = 'none';
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  loaiSanPhams: any[] = [];
  sanPhams: any[] = [];
  maker: any[] = [];
  cart: any[] = [];
  public cartItems: any[] = [];
  // isLoggedIn: boolean;
  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private loginComponent: LoginComponent,
    private homeComponent: HomeComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchLoaiSanPhams();
    this.fetchSanPhams();
    this.fetchNhaSanXuats();
    this.cartService.cart$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }
  fetchLoaiSanPhams() {
    this.http.get(this.url + '/admin/category').subscribe((data: any) => {
      this.loaiSanPhams = data;
    });
  }
  fetchSanPhams() {
    this.http.get(this.url + '/admin/product').subscribe((data: any) => {
      this.sanPhams = data;
    });
  }
  fetchNhaSanXuats() {
    this.http.get(this.url + '/admin/maker').subscribe((data: any) => {
      this.maker = data;
    });
  }
  addToCartProduct(
    productId: number,
    TenSanPham: any,
    Anh: any,
    Gia: any,
    quantity: number
  ) {
    this.homeComponent.addToCart(productId, TenSanPham, Anh, Gia, quantity);
  }
  callCartMiniFromHeader() {
    this.headerComponent.cartMini();
  }


}
