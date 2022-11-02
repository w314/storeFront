import { Injectable } from '@angular/core';
// import models
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Order = {
    items: [],
    status: 'active',
  };

  constructor() {}

  getCart() {
    return this.cart;
  }

  addToCart(productId: number, quantity: number) {
    // console.log(`in cart service, add to cart\nproduct id: ${productId}, quantity: ${quantity}`)
    // check if item is already in cart:
    const itemIndex = this.cart.items.findIndex(
      (item) => item.productId == productId
    );
    if (itemIndex != -1) {
      // update quantity if item is already in order
      const prevQuantity = this.cart.items[itemIndex].quantity;
      this.cart.items[itemIndex].quantity = prevQuantity + quantity;
    } else {
      // create new item in order
      const newItem: OrderItem = {
        // id: this.cart.items.length + 1,
        quantity: quantity,
        productId: productId,
      };
      this.cart.items.push(newItem);
    }
    console.log(this.cart.items);
  }

  deleteItem(productId: number) {
    this.cart.items = this.cart.items.filter((item) => item.productId != productId);
  }

  updateQuantity(productId: number, quantity: number) {
    const itemIndex = this.cart.items.findIndex((item) => item.productId == productId);
    this.cart.items[itemIndex].quantity = quantity;
    console.log(this.cart);
  }

  emptyCart(): void {
    this.cart.items = [];
  }
}
