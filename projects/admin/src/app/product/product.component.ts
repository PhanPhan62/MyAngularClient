import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title: any = 'Sản Phẩm';
  sanPhams: any[] = [];
  loaiSanPhams: any[] = [];
  donViTinhs: any[] = [];
  nhaSanXuats: any[] = [];
  public selectedProducts: any[] = [];
  public url = 'http://localhost:3000';

  public MaLoai: any;
  public TenSanPham: any;
  public MoTaSanPham: any;
  public MaNSX: any;
  public MaDonViTinh: any;
  public Gia: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sanpham.MaLoai = 0;
    this.sanpham.TenSanPham = '';
    this.sanpham.MoTaSanPham = '';
    this.sanpham.MaNSX = 0;
    this.sanpham.MaDonViTinh = 0;
    this.sanpham.Gia = 0;
    this.fetchSanPhams();
    this.fetchLoaiSanPhams();
    this.fetchDonViTinhs();
    this.fetchNhaSanXuats();
  }
  p: number = 1;

  fetchSanPhams() {
    const pageIndex = this.p;
    const pageSize = 1;

    this.http
      .get(`${this.url}/admin/product?page=${pageIndex}&pageSize=${pageSize}`)
      .subscribe((data: any) => {
        this.sanPhams = data;
      });
  }

  fetchLoaiSanPhams() {
    this.http.get(this.url + '/admin/category').subscribe((data: any) => {
      this.loaiSanPhams = data;
    });
  }

  fetchDonViTinhs() {
    this.http.get(this.url + '/admin/unit').subscribe((data: any) => {
      this.donViTinhs = data;
    });
  }

  fetchNhaSanXuats() {
    this.http.get(this.url + '/admin/maker').subscribe((data: any) => {
      this.nhaSanXuats = data;
    });
  }
  sanpham: any = {};
  selectedFiles: File[] = [];
  successMessageVisible = false;
  isEditing: boolean = false;
  editItemId: number | null = null;

  submitSanPham() {
    if (!this.isEditing) {
      const formData = new FormData();
      formData.append('MaLoai', this.sanpham.MaLoai);
      formData.append('TenSanPham', this.sanpham.TenSanPham);
      formData.append('MoTaSanPham', this.sanpham.MoTaSanPham);
      formData.append('MaNSX', this.sanpham.MaNSX);
      formData.append('MaDonViTinh', this.sanpham.MaDonViTinh);
      formData.append('Gia', this.sanpham.Gia);

      for (const file of this.selectedFiles) {
        formData.append('Anh', file);
      }

      this.http
        .post(this.url + '/admin/sanpham', formData)
        .subscribe((response) => {
          console.log('Sản phẩm đã được thêm thành công.');
          this.successMessageVisible = true;
          this.sanpham.MaLoai = 0;
          this.sanpham.TenSanPham = '';
          this.sanpham.MoTaSanPham = '';
          this.sanpham.MaNSX = 0;
          this.sanpham.MaDonViTinh = 0;
          this.sanpham.Gia = 0;
          this.selectedFiles = [];
          setTimeout(() => {
            this.successMessageVisible = false;
            this.fetchSanPhams();
          }, 4000);
        });
    } else {
      this.http
        .patch(this.url + '/product/update/'+ this.sanpham.id, this.sanpham)
        .subscribe(() => {
          this.isEditing = false;
          this.editItemId = null;
          this.fetchSanPhams();
          this.sanpham = {};
        });
    }
  }
  edit(item:any){
    this.sanpham = { ...item };
    this.isEditing = true;
    this.editItemId = item.id;
    console.log(this.sanpham, this.editItemId);
    
    // alert(item.id)
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }
  deleteProduct(productId: number, productName: string): void {
    const isConfirmed = confirm(
      `Bạn có chắc chắn muốn xóa sản phẩm ${productName} không?`
    );

    if (isConfirmed) {
      this.http
        .delete<any>(`${this.url}/admin/product/delete/${productId}`, {})
        .subscribe(
          (response) => {
            console.log('Xóa thành công', response.message);
            alert(`Xóa sản Phẩm ${productName} thành công`);
            this.fetchSanPhams();
          },
          (error) => {
            alert(`Lỗi ${error}`);
          }
        );
    }
  }
}
