import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../layouts/header/header.component';
import { CartService } from '../cart.service';
import { slideIn } from '../layouts/app.animations';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideIn],
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
  cart: any[] = [];
  public sharedValue: any = ''; // Modify the type if needed
  public cartItems: any[] = [];
  public arrayCart: any[] = [];
  menu: any[] = [];
  loaiSanPhams: any[] = [];
  showAlert: boolean = false;
  alertMessage: any;
  arrayCartHeader: any[] = [];
  public url = 'http://localhost:3000';
  showCategory: string = 'block';
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  constructor(
    private http: HttpClient,
    private cartService: CartService,
    private loginComponent: LoginComponent,
    private router: Router
  ) {}
  ngOnInit() {
    this.fetchNewProducts();
    this.fetchNewProducts3();
    this.fetchgetAllBestSeller();
    this.fetchgetAllBestSeller3();
    this.fetchgetAllSell();
    this.fetchgetAllSell3();
    this.fetchMenu();
    this.fetchLoaiSanPhams();
    this.cartService.cart$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
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

    this.http.get(`${this.url}/listImg/${id}`).subscribe((data: any) => {
      this.listImg = data;
    });
  }
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
  addToCart(
    productId: number,
    TenSanPham: any,
    Anh: any,
    Gia: any,
    quantity: number
  ) {
    if (this.loginComponent.login()) {
      const existingItem = this.cart.find(
        (cartItem) =>
          cartItem.productId === productId &&
          cartItem.TenSanPham === TenSanPham &&
          cartItem.Anh === Anh &&
          cartItem.Gia === Gia
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cart.push({ productId, TenSanPham, Anh, Gia, quantity });
      }
      this.cartService.updateCart([...this.cart]);
      console.log(this.cart);

      alert(`Sản phẩm đã được thêm vào giỏ`);
      this.callCartMiniFromHeader();
    } else {
      this.router.navigate(['/login']);
    }
  }
  createOrder() {
    // Kiểm tra xem giỏ hàng có dữ liệu hay không
    if (!this.cart || this.cart.length === 0) {
      alert('Giỏ hàng rỗng!');
      return;
    }

    // Tạo một mảng mới chỉ chứa các thuộc tính cần thiết từ giỏ hàng
    const orderDetails = this.cart.map((item) => ({
      productId: item.productId,
      Gia: item.Gia,
      quantity: item.quantity,
      ThanhTien: item.Gia * item.quantity,
    }));

    // Tạo đối tượng dữ liệu đơn hàng
    const orderData = {
      MaKhachHang: 1, // Thay thế bằng ID của khách hàng thực tế
      chiTietDonHang: orderDetails,
    };

    // Gửi đơn hàng đến server
    this.http.post('http://localhost:3000/orders', orderData).subscribe(
      (response: any) => {
        alert('Thanh toán thành công');
        console.log('Đã thêm đơn hàng:', response);
        // orderData=[];
        this.headerComponent.resetHeaderCart();
        // Xử lý thành công
      },
      (error) => {
        console.error('Lỗi khi thêm đơn hàng:', error);
        // Xử lý lỗi
      }
    );
  }

  callCartMiniFromHeader() {
    this.headerComponent.cartMini();
  }
  redirectToProductDetail(productId: string): void {
    this.router.navigate(['/productDetail', productId]);
  }
  
}
