import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
interface Product {
  id: number;
  TenLoai: string;
  TenSanPham: string;
  MoTaSanPham: string;
  Gia: number;
  Anh: string[];
  TenNSX: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newProduct: any[] = [];
  newProduct3: any[] = [];
  getAllBestSeller: any[] = [];
  getAllBestSeller3: any[] = [];
  getAllSell: any[] = [];
  getAllSell3: any[] = [];
  getByIdProduct: any[] = []; 
  listImg: any[] = [];
  public url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchNewProducts();
    this.fetchNewProducts3();
    this.fetchgetAllBestSeller();
    this.fetchgetAllBestSeller3();
    this.fetchgetAllSell();
    this.fetchgetAllSell3();
    this.fetchMenu();
    this.fetchLoaiSanPhams();
  }
  fetchNewProducts3() {
    this.http.get(this.url + '/newProducts3').subscribe((data: any) => {
      this.newProduct3 = data;
    });
  }
  fetchNewProducts() {
    this.http.get(this.url + '/newProducts').subscribe((data: any) => {
      this.newProduct = data;
    });
  }
  fetchgetAllBestSeller() {
    this.http.get(this.url + '/getAllBestSeller').subscribe((data: any) => {
      this.getAllBestSeller = data;
    });
  }
  fetchgetAllBestSeller3() {
    this.http.get(this.url + '/getAllBestSeller3').subscribe((data: any) => {
      this.getAllBestSeller3 = data;
    });
  }
  fetchgetAllSell() {
    this.http.get(this.url + '/getAllSell').subscribe((data: any) => {
      this.getAllSell = data;
    });
  }
  fetchgetAllSell3() {
    this.http.get(this.url + '/getAllSell3').subscribe((data: any) => {
      this.getAllSell3 = data;
    });
  }

  detailProduct(id: number) {
    this.http.get(this.url + '/getByIdProduct/' + id).subscribe((data: any) => {
      this.getByIdProduct = data;
    });
    this.http.get(this.url + '/listImg/' + id).subscribe((data: any) => {
      this.listImg = data;
    });
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
