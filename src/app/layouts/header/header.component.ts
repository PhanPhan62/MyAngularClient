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
  arrayCartHeader: any[] = [];
  numberOfItems: number = 0;
  total: number = 0;
  constructor(private http: HttpClient, private homeComponent: HomeComponent) {}
  // this.appComponent.updateSharedValue('New Value from Component 1');
  ngOnInit() {
    this.fetchMenu();
    this.fetchLoaiSanPhams();
    this.cartMini();
    // this.ngAfterViewInit();
  }

  public cartMini() {
    this.arrayCartHeader = this.homeComponent.cartItems;
    this.numberOfItems = this.arrayCartHeader.length;
    console.log(this.arrayCartHeader);
      
    this.total = this.arrayCartHeader.reduce((total, item) => {
      return total + item.Gia * item.quantity;
    }, 0);
  }
  menu: any[] = [];
  loaiSanPhams: any[] = [];

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
