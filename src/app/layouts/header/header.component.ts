import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductComponent } from 'src/app/product/product.component';
import { LoginComponent } from 'src/app/login/login.component';
import { CartService } from 'src/app/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public url = 'http://localhost:3000';
  showCategory: any;
  arrayCartHeader: any[] = [];
  numberOfItems: number = 0;
  total: number = 0;
  menu: any[] = [];
  loaiSanPhams: any[] = [];
  constructor(
    private http: HttpClient,
    private homeComponent: HomeComponent,
    private loginComponent: LoginComponent,
    private cartService: CartService,
    private productComponent: ProductComponent
  ) {}
  // this.appComponent.updateSharedValue('New Value from Component 1');
  ngOnInit() {
    this.fetchMenu();
    this.fetchLoaiSanPhams();
    this.cartMini();
    this.home();
    this.product();
  }
  home() {
    this.showCategory = this.homeComponent.showCategory;
    // console.log(this.showCategory);
  }
  product() {
    this.showCategory = this.productComponent.showCategory;
  }
  public cartMini() {
    this.arrayCartHeader = this.homeComponent.cartItems;
    this.numberOfItems = this.arrayCartHeader.length;
    // console.log(this.arrayCartHeader);

    this.total = this.arrayCartHeader.reduce((total, item) => {
      return total + item.Gia * item.quantity;
    }, 0);
    const cartData = {
      arrayCartHeader: this.arrayCartHeader,
      numberOfItems: this.numberOfItems,
      total: this.total,
    };
  }
  resetHeaderCart() {
    this.arrayCartHeader = [];
    this.numberOfItems = 0;
    this.total = 0;
  }
  public deleteCart(id: any) {
    // Lọc và cập nhật lại mảng gốc trong HomeComponent
    this.homeComponent.cartItems = this.homeComponent.cartItems.filter(
      function (item) {
        return item.productId !== id;
      }
    );
    this.cartMini();
    // console.log(this.cartService.updateCart([...this.homeComponent.cart]));
    
    // this.cartService.updateCart([...this.homeComponent.cart]);
    // Cập nhật lại mảng local trong HeaderComponent
  }

  hearderCreateOrder() {
    this.homeComponent.createOrder();
  }

  headerLogout() {
    this.loginComponent.logout();
  }
  fetchMenu() {
    this.http.get(this.url + '/menu').subscribe((data: any) => {
      this.menu = data;
    });
  }
  fetchLoaiSanPhams() {
    this.http.get(this.url + '/admin/category').subscribe((data: any) => {
      this.loaiSanPhams = data;
    });
  }
}
