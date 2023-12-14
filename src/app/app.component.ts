import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'The Women';
  menu: any[] = [];
  loaiSanPhams: any[] = [];
  public url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchMenu();
    this.fetchLoaiSanPhams();
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
