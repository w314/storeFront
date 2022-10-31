import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  name = '';
  address = '';
  creditCard = '';
  success = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.success = true;
    this.cartService.emptyCart();
    // console.log('checkout submit button clicked')
    // this.router.navigate(['checkout','success'])
  }
}
