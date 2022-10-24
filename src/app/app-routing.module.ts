import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import router
import { Routes, RouterModule } from '@angular/router'
// import components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';

// create routes
const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent }
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
