import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any;
  password: any;
  isLoggedIn: boolean = false;
  constructor(
    private http: HttpClient, 
    private router: Router
    ) {

    // this.isLoggedIn = this.product.isLoggedIn;
    // if (this.isLoggedIn) {
    //   this.router.navigate(['/']);
    // } else {    
    //   this.router.navigate(['/login']);
    // }
  }
  login() {
    // Thực hiện logic đăng nhập, kiểm tra username và password
    // Nếu đăng nhập thành công, set this.isLoggedIn = true;
    return this.isLoggedIn = true;
  }
  public logout() {
    // Thực hiện logic đăng xuất
    // Set this.isLoggedIn = false;
    this.isLoggedIn = false;
  }
  checkLogin() {
    const userData = { TaiKhoan: this.username, MatKhau: this.password };
    this.http
      .post('http://localhost:3000/login', userData)
      .subscribe((response: any) => {
        if (response.message) {
          this.login();
          console.log(response.results.id);
          
          alert(response.message);
          this.router.navigate(['/']);
        } else {
          alert(response.message);
          this.router.navigate(['/login']);
        }
      });
  }
}
