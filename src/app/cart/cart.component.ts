import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  title = 'Giỏ hàng';
  showCategory: string = 'none';
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  constructor(
    private http: HttpClient,
    private cartService: CartService // private loginComponent: LoginComponent
  ) {
    // this.loginComponent.isLoggedIn = true;
  }

  ngOnInit() {
    this.callCart();
  }
  callCart() {
    this.callCartMiniFromHeader();
  }
  callCartMiniFromHeader() {
    if (this.headerComponent) {
      this.headerComponent.cartMini();
    } else {
      console.log('Header component is not available');
    }
  }
}
