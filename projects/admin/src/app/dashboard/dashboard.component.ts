import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  order: any[] = [];
  countOrders: number = 0;
  totalIncome: any[] = [];
  countTotalIncome: number = 0;
  TotalCost: any[]=[];
  countTotalCost:number = 0;
  users:any[]=[];
  countUsers:number=0;
  public url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getOrders();
    this.getTotalIncome();
    this.getTotalCost();
    this.getUsers();
  }
  getUsers() {
    this.http.get(this.url + 'countUsers').subscribe((data: any) => {
      this.users = data;
      for (let index = 0; index < this.users.length; index++) {
        this.countUsers += 1;
      }
    });
  }
  getTotalCost() {
    this.http.get(this.url + 'countTotalCost').subscribe((data: any) => {
      this.TotalCost = data;
      for (let index = 0; index < this.TotalCost.length; index++) {
        this.countTotalCost +=
        this.TotalCost[index].SoLuong * this.TotalCost[index].DonGiaNhap;
      }
    });
  }
  getTotalIncome() {
    this.http.get(this.url + 'countTotalIncome').subscribe((data: any) => {
      this.totalIncome = data;
      for (let index = 0; index < this.totalIncome.length; index++) {
        this.countTotalIncome +=
          this.totalIncome[index].SoLuong * this.totalIncome[index].GiaMua;
      }
    });
  }
  getOrders() {
    this.http.get(this.url + 'countOrder').subscribe((data: any) => {
      this.order = data;
      for (let index = 0; index < this.order.length; index++) {
        this.countOrders += 1;
        // console.log(this.countOrders);
      }
    });
  }
}
