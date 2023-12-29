import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public url = 'http://localhost:3000';
  showCategory: string = "none";
  arrayCartHeader: any[] = [];
  numberOfItems: number = 0;
  total: number = 0;
  menu: any[] = [];
  loaiSanPhams: any[] = [];
  constructor(private http: HttpClient, private homeComponent: HomeComponent) {}
  // this.appComponent.updateSharedValue('New Value from Component 1');
  ngOnInit() {
    this.fetchMenu();
    this.fetchLoaiSanPhams();
    this.cartMini();
    this.home();
    this.product();
  }
  home(){
    this.showCategory= this.homeComponent.showCategory
  }
  product(){
    this.showCategory = this.homeComponent.showCategory;
  }
  public cartMini() {
    this.arrayCartHeader = this.homeComponent.cartItems;
    this.numberOfItems = this.arrayCartHeader.length;
    // console.log(this.arrayCartHeader);

    this.total = this.arrayCartHeader.reduce((total, item) => {
      return total + item.Gia * item.quantity;
    }, 0);
  }
  public deleteCart(id: any) {
    // Lọc và cập nhật lại mảng gốc trong HomeComponent
    this.homeComponent.cartItems = this.homeComponent.cartItems.filter(
      function (item) {
        return item.productId !== id;
      }
    );

    // Cập nhật lại mảng local trong HeaderComponent
    this.cartMini()
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
