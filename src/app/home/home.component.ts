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
  // getByIdProduct: any[] = [];
  public getByIdProduct: any = {
    id: 0,
    TenLoai: '',
    TenSanPham: '',
    MoTaSanPham: '',
    Gia: 0,
    Anh: [{ Anh1: 'hihi' }],
    TenNSX: '',
  };
  public url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchNewProducts();
    this.fetchNewProducts3();
    this.fetchgetAllBestSeller();
    this.fetchgetAllBestSeller3();
    this.fetchgetAllSell();
    this.fetchgetAllSell3();
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

  // detailProduct(id: number) {
  //   this.http.get(this.url + '/getByIdProduct/' + id).subscribe(
  //     (data: any) => {
  //       this.getByIdProduct = {
  //         id: data[0].id,
  //         TenLoai: data[0].TenLoai,
  //         TenSanPham: data[0].TenSanPham,
  //         MoTaSanPham: data[0].MoTaSanPham,
  //         Gia: data[0].Gia,
  //         Anh: JSON.parse(data[0].Anh).map((anh: string, index: number) => ({
  //           [`Anh${index + 1}`]: anh,
  //         })),
  //         TenNSX: data[0].TenNSX,
  //       };
  //       console.log(this.getByIdProduct);

  //       // Transform the Anh array to an array of objects
  //       this.getByIdProduct.Anh = this.getByIdProduct.Anh.map(
  //         (anh: string, index: number) => {
  //           return { [`Anh${index + 1}`]: anh };
  //         }
  //       );
  //     },
  //     (error) => {
  //       console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
  //     }
  //   );
  // }
  listImg:any[]=[];
  detailProduct(id: number) {
    this.http.get(this.url + '/getByIdProduct/' + id).subscribe((data: any) => {
      this.getByIdProduct = data;
      // console.log(this.getByIdProduct);
      
    });
    this.http.get(this.url + '/listImg/' + id).subscribe((data: any) => {
      this.listImg = data;
      // console.log(this.listImg);
      
    });
  }
}
