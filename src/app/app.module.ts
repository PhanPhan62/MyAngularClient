import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NewsletterComponent } from './layouts/newsletter/newsletter.component';
import { CartService } from './cart.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { OrdersComponent } from './projects/admin/orders/orders.component';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    LoginComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    NewsletterComponent,
    CartComponent,
    CheckoutComponent,
    // OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleriaModule,
    CarouselModule.forRoot(),
  ],
  providers: [
    CartService,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
