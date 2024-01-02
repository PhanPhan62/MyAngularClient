import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/cart.service';
import { LoginComponent } from 'src/app/login/login.component';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { data } from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public url = 'http://localhost:3000';
  showCategory: string = 'block';
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  loaiSanPhams: any[] =[];
  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private loginComponent: LoginComponent,
    private homeComponent: HomeComponent,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.fetchLoaiSanPhamsFooter();
  }
  fetchLoaiSanPhamsFooter() {
    this.http.get(this.url + '/admin/category').subscribe((data: any) => {
      this.loaiSanPhams = data;
      // console.log(this.loaiSanPhams);
    });
  }
}
