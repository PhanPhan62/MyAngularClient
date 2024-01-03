import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // animations: [
  //   trigger('fadeInOut', [
  //     state('in', style({ opacity: 1 })),
  //     transition(':enter', [style({ opacity: 0 }), animate(300)]),
  //     transition(':leave', [animate(300, style({ opacity: 0 }))]),
  //   ]),
  // ],
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  images: any[] = [];
  currentIndex = 0;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private homeComponent: HomeComponent
  ) {}
  public url = 'http://localhost:3000';
  public getByIdProduct: any[] = [];
  listImg: any[] = [];
  ngOnInit() {
    this.detailProduct();
  }

  detailProduct() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      

      this.http
        .get(`${this.url}/getByIdProduct/${productId}`)
        .subscribe((data: any) => {
          this.getByIdProduct = data;
          console.log(this.getByIdProduct);
        });
      this.http
        .get(`${this.url}/listImg/${productId}`)
        .subscribe((data: any) => {
          this.listImg = data;
        });
    });
  }

}
