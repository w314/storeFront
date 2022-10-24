import { Injectable } from '@angular/core';
// import models
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Order =  {
    items: [],
    status: 'active'
  }

  constructor() { }

  getCart() {
    return this.cart
  }

  addToCart(productId: number, quantity: number) {
    // check if item is already in cart:
    const item = this.cart.items.find(item => item.productId == productId)
    if (item) {
      // update quantity if item is already in order
      const prevQuantity = item.quantity
      this.cart.items[item.id].quantity = prevQuantity + quantity
    } else {
      // create new item in order
      const newItem: OrderItem = {
        id: this.cart.items.length + 1,
        quantity: quantity,
        productId: productId
      }
      this.cart.items.push(newItem)
    }
    console.log(this.cart.items)
  }

  deleteItem(id:number) {
    this.cart.items = this.cart.items.filter(item => item.id != id)
  }
}
