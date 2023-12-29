import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title="Sản phẩm"
  showCategory: string = 'none';
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  constructor(private http: HttpClient, private cartService: CartService) {}
  ngOnInit() {}
}
