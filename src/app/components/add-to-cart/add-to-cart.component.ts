import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  // componenet receives productId from parent component
  @Input() productId = 0;
  quantity = 1;
  addedToCart = false;
  submitMessage = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(
    //   `Add to cart button clicked.\nproduct id: ${this.productId}, quantity: ${this.quantity}`
    // );
    this.cartService.addToCart(this.productId, this.quantity);
    this.addedToCart = true;
    this.submitMessage = `${this.quantity} added to cart`;
    this.quantity = 1;
  }
}
