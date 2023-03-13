import { Component, OnInit } from '@angular/core';
// import product_service to get products
import { ProductService } from 'src/app/services/product.service';
// import Product model
import { Product } from './../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // property to store array of products
  products: Product[] = [];

  // inject productService to constructor
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // get product data
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      // console.log(`products received: ${JSON.stringify(this.products, null, 4)}`)
    });
  }
}
