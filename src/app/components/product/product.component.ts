// import Input to receive data from parent component
import { Component, OnInit, Input } from '@angular/core';
// import Product model
import { Product } from './../../models/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // use Input decorator to indicate data is coming from parent component
  @Input() product: Product;
  // @Input() productId: number

  constructor() {
    // intitalize product property
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      categoryId: 0,
    };
    // this.productId = 0
  }

  ngOnInit(): void {}
}
