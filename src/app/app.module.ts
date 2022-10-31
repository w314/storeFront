import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductNameComponent } from './components/product-name/product-name.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    NavBarComponent,
    ProductDetailComponent,
    AddToCartComponent,
    CartComponent,
    OrderItemComponent,
    CheckoutComponent,
    SuccessComponent,
    ProductImageComponent,
    ProductNameComponent,
    ProductPriceComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
