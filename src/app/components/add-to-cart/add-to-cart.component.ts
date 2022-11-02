import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  // componenet receives productId from parent component
  @Input() productId = 0;
  @Input() quantity = 1;
  @Input() inCheckout = false;
  @Input() inCart = false;

  @Output() updateQuantity: EventEmitter<{
    productId: number;
    quantity: number;
  }> = new EventEmitter();
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();

  addedToCart = false;
  submitMessage = '';
  deleteMessage = '';

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

  update(productId: number, quantity: number): void {
    this.updateQuantity.emit({ productId, quantity });
  }

  delete(productId: number): void {
    this.deleteItem.emit(productId);
  }
}
