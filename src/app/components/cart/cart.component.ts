import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Order } from 'src/app/models/Order';
import { ProductService } from './../../services/product.service'

class CartItem { 
  id: number = 0
  product: Product = {} as Product
  quantity:number = 0
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  cart: CartItem [] = []
  products: Product[] = []
  total: number = 0

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const activeOrder:Order  = this.cartService.getCart()
    this.productService.getProducts().subscribe(data => {
      this.products = data
      activeOrder.items.forEach(item => {
        const product: Product = this.products.find(product => product.id == item.productId) as Product
        const cartItem: CartItem = {
          id: item.id,
          product: product,
          quantity: item.quantity,
        }
        this.total += product.price * item.quantity
        this.cart.push(cartItem)
      });
    })
 
  }

  updateTotal(): void {
    this.total = this.cart.reduce(((total, item) => total += item.product.price * item.quantity), 0)
  }
      
  deleteItem(id: number): void {      
    this.cart = this.cart.filter(item => item.id != id)
    this.cartService.deleteItem(id)  
    this.updateTotal()
  }

  updateQuantity(id: number, quantity: number): void {
    console.log(`UPDATE BUTTON CLICKED`)
    // const itemIndex = this.cart.findIndex(item => item.id == id)
    // this.cart.
    this.cartService.updateQuantity(id, quantity)
    this.updateTotal()
  }
}
