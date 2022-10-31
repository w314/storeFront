import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css'],
})
export class ProductPriceComponent implements OnInit {
  @Input() price: number = 0;

  constructor() {}

  ngOnInit(): void {}

  priceToString(): string {
    const dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return dollarUS.format(this.price);
  }
}
