import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchMenu();
    this.fetchLoaiSanPhams();
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
