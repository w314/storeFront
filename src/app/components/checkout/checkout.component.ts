import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  name: string = '';
  address: string = '';
  creditCard: string = '';
  success: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.success = true;
    this.cartService.emptyCart();
    // console.log('checkout submit button clicked')
    // this.router.navigate(['checkout','success'])
  }
}
