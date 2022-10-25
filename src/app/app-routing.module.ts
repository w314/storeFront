import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import router
import { Routes, RouterModule } from '@angular/router'
// import components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/success/success.component';

// create routes
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'checkout/success', component: SuccessComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // add RouterModule to imports
    RouterModule.forRoot(routes)
  ],
  // export RouterModule
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
