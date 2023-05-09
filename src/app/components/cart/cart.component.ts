import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/Product';
import { Order } from 'src/app/models/Order';
import { ProductService } from './../../services/product.service';
import { OrderItem } from 'src/app/models/OrderItem';

class CartItem {
  product: Product = {} as Product;
  quantity = 0;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  // use product-list.component.css as using classes productList and product 
  // to assure products are displayed in similar style
  styleUrls: ['./cart.component.css', '../product-list/product-list.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  products: Product[] = [];
  total = '';
  @Input() checkout = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const activeOrder: Order = this.cartService.getCart();
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      activeOrder.items.forEach((item) => {
        const product: Product = this.products.find(
          (product) => product.id == item.productId
        ) as Product;
        const cartItem: CartItem = {
          product: product,
          quantity: item.quantity,
        };
        // this.total += product.price * item.quantity
        this.cart.push(cartItem);
      });
      this.updateTotal();
      sessionStorage.setItem('total', this.total);
    });
  }

  updateTotal(): void {
    const dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const totalPrice: number = this.cart.reduce((total, item) => {
      console.log(
        `In REDUCE: price: ${item.product.price}, quantity: ${item.quantity}`
      );
      return (total += item.product.price * item.quantity);
    }, 0);
    this.total = dollarUS.format(totalPrice);
    console.log(`\n NEW TOTAL: ${this.total}`);
    sessionStorage.setItem('total', this.total);
  }

  deleteItem(productId: number): void {
    const item = this.cart.filter((item) => item.product.id == productId)[0];
    this.cart = this.cart.filter((item) => item.product.id != productId);
    this.cartService.deleteItem(productId);
    this.updateTotal();
    window.alert(`${item.product.name} was deleted from your cart.`);
  }

  updateQuantity(orderItem: OrderItem): void {
    const itemIndex = this.cart.findIndex(
      (item) => item.product.id == orderItem.productId
    );
    this.cart[itemIndex].quantity = orderItem.quantity;
    this.cartService.updateQuantity(orderItem.productId, orderItem.quantity);
    this.updateTotal();
  }
}
