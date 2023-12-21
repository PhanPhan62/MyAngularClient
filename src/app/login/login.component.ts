import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any;
  password: any;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const userData = { TaiKhoan: this.username, MatKhau: this.password };
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // console.log(userData);
    this.http
      .post('http://localhost:3000/login', userData)
      .subscribe((response: any) => {
        // console.log(response);
        if (response.message) {
          alert(response.message);
          this.router.navigate(['']);
        } else {
          alert(response.message);
          this.router.navigate(['/login']);
        }
      });
  }
}
