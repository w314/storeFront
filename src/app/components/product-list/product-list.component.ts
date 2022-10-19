import { Component, OnInit } from '@angular/core';
// import product_service to get products
import { ProductServiceService } from 'src/app/services/product-service.service';
// import Product model
import { Product } from './../../models/Product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // variable to store array of products
  products: Product[] = []  

  // inject productService to constructor
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    // get product data
    this.productService.getProducts().subscribe( data => {
      this.products = data
    })
    console.log(this.products)
  }

}
