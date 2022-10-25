import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  @Input() price: number = 0
  priceString: string = ''

  constructor() { }

  ngOnInit(): void {
    const dollarUS = Intl.NumberFormat('en-US', {
      style : 'currency',
      currency: 'USD'
    })
    this.priceString = dollarUS.format(this.price)
  }

}
