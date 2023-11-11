import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  title: any = 'Sản Phẩm';
  sanPhams: any[] = [];
  loaiSanPhams: any[] = [];
  donViTinhs: any[] = [];
  nhaSanXuats: any[] = [];

  public url = 'http://localhost:3000';

  public MaLoai: any;
  public TenSanPham: any;
  public MoTaSanPham: any;
  public MaNSX: any ;
  public MaDonViTinh: any ;
  public Gia: any ;


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

  fetchSanPhams() {
    this.http.get(this.url + '/admin/product').subscribe((data: any) => {
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

  submitSanPham() {
    const formData = new FormData();
    formData.append('MaLoai', this.sanpham.MaLoai);
    formData.append('TenSanPham', this.sanpham.TenSanPham);
    formData.append('MoTaSanPham', this.sanpham.MoTaSanPham);
    formData.append('MaNSX', this.sanpham.MaNSX);
    formData.append('MaDonViTinh', this.sanpham.MaDonViTinh);
    // formData.append('NgayBatDau', this.sanpham.NgayBatDau);
    formData.append('NgayKetThuc', this.sanpham.NgayKetThuc);
    formData.append('Gia', this.sanpham.Gia);

    for (const file of this.selectedFiles) {
      formData.append('Anh', file);
    }

    this.http
      .post('http://localhost:3000/admin/sanpham', formData)
      .subscribe((response) => {
        console.log('Sản phẩm đã được thêm thành công.');
        this.successMessageVisible = true;
        this.sanpham.MaLoai;
        this.sanpham.TenSanPham = '';
        this.sanpham.MoTaSanPham = '';
        this.sanpham.MaNSX;
        this.sanpham.MaDonViTinh;
        // this.sanpham.NgayBatDau='';
        this.sanpham.NgayKetThuc = '';
        this.sanpham.Gia = 0;
        this.selectedFiles = [];
        // setTimeout(() => {
        //   window.location.reload();
        // }, 0);
        setTimeout(() => {
          this.successMessageVisible = false;
        }, 4000);
      });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }
}
