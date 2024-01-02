import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title: any;
  //  ngAfterViewInit() {}
  constructor(
    private titleService: Title,
    private homeComponent: HomeComponent,
    private productComponent: ProductComponent,
    private loginComponent: LoginComponent,
    private router: Router
  ) {}

  ngOnInit() {
    // Kiểm tra trạng thái đăng nhập khi ứng dụng khởi chạy
    if (!this.loginComponent.login) {
      // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
      this.router.navigate(['/login']);
    } 
    this.titleFunction();
  }
  titleFunction() {
    // this.titleService.setTitle(this.homeComponent.title);
    // // this.titleService.setTitle(this.productComponent.title);
  }
  // home(){
  //   this.titleService.setTitle(this.homeComponent.title);
  // }
  // product(){
  //   this.titleService.setTitle(this.productComponent.title);

  // }

  scriptPaths: string[] = [
    // '/assets/js/jquery.min.js',
    // '/assets/js/jquery-migrate-3.0.0.js',
    // '/assets/js/jquery-ui.min.js',
    // '/assets/js/popper.min.js',
    // '/assets/js/bootstrap.min.js',
    // '/assets/js/slicknav.min.js',
    // '/assets/js/waypoints.min.js',
    // '/assets/js/finalcountdown.min.js',
    // '/assets/js/onepage-nav.min.js',
    '/assets/js/owl-carousel.js',
    '/assets/js/magnific-popup.js',
    '/assets/js/nicesellect.js',
    '/assets/js/flex-slider.js',
    '/assets/js/scrollup.js',
    '/assets/js/easing.js',
    '/assets/js/active.js',
  ];
  ngAfterViewInit() {
    this.scriptPaths.forEach((path) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = path;

      // Thêm vào sau khi DOM đã được load hoàn toàn
      document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(scriptElement);
      });
    });
  }
}
