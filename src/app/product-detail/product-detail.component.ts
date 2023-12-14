import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}
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
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('Product ID:', id);
      this.getByIdProductFunction(id);
    });
  }
    getByIdProductFunction(id:any) {
      this.http.get(this.url + '/getByIdProduct/' + id).subscribe((data: any) => {
        this.getByIdProduct = data;
      });
      this.http.get(this.url + '/listImg/' + id).subscribe((data: any) => {
        this.listImg = data;
        console.log(this.listImg);
      });
    }
  
  listImgFunction(id: any) {
    
  }
}
