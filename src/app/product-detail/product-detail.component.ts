import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private homeComponent: HomeComponent
  ) {}
  public url = 'http://localhost:3000';
  public getByIdProduct: any = {
    id: 0,
    TenLoai: '',
    TenSanPham: '',
    MoTaSanPham: '',
    Gia: 0,
    Anh: [{ Anh1: 'hihi' }],
    TenNSX: '',
  };
  listImg: any[] = [];
  ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     const id = params['id'];
  //     console.log('Product ID:', id);
  //     this.getByIdProductFunction(id);
  //   });
  // }
  // getByIdProductFunction(id: any) {
  //   this.http.get(this.url + '/getByIdProduct/' + id).subscribe((data: any) => {
  //     this.getByIdProduct = data;
  //   });
  //   this.http.get(this.url + '/listImg/' + id).subscribe((data: any) => {
  //     this.listImg = data;
  //     console.log(this.listImg);
  //   });

  this.callProductDetail();
  }

  // detailProduct(id: number) {
  //   this.http.get(`${this.url}/getByIdProduct/${id}`).subscribe((data: any) => {
  //     this.getByIdProduct = data;
  //   });
  //   this.http.get(`${this.url}/listImg/${id}`).subscribe((data: any) => {
  //     this.listImg = data;
  //   });
  // }

  callProductDetail() {
    this.homeComponent.redirectToProductDetail(this.productId);
    console.log(this.productId);
    
  }

  loadProductDetail(): void {}
}
