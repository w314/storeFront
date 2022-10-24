import { Component, OnInit } from '@angular/core';
// import Product model
import { Product } from './../../models/Product'
// import productService
import { ProductService } from 'src/app/services/product.service';
// import ActivatedRoute to be able to get productId from url path
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: '',
    categoryId: 0
  }

  // productId: number = 6

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // get id from url 
    let productId: number
    this.activatedRoute.params.subscribe(params => {
      productId = params['productId']
      console.log(`product id in url: ${productId}`)
      // get products
      this.productService.getProducts().subscribe(data => {
        // find product with requested id
        this.product = data.find(product => product.id == productId)!
        console.log(`product in product-detail: ${JSON.stringify(this.product, null, 4)})`)
      })
    }) 
  }

}
