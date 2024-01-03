import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders = [];
  constructor(private http: HttpClient) {}
  
  public url = 'http://localhost:3000';
  p: number = 1;
  fetchOrders() {
    const pageIndex = this.p;
    const pageSize = 1;

    this.http
      .get(`${this.url}/order?page=${pageIndex}&pageSize=${pageSize}`)
      .subscribe((data: any) => {
        this.orders = data;
        console.log(this.orders);
      });
  }
  Edit(_t59: any) {
    throw new Error('Method not implemented.');
  }
  deleteProduct(arg0: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
  Create() {
    throw new Error('Method not implemented.');
  }
  title = 'Đơn hàng';
  ngOnInit(): void {
    this.fetchOrders();
  }
  images: any;
  displayCustom: any;
  activeIndex: any;
  responsiveOptions: any;

  handleValueChange(newValue: any) {
    // handle the changed value here
    console.log(newValue);
  }
}
