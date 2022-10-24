import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})

export class AddToCartComponent implements OnInit {

  // componenet receives productId from parent component
  @Input() productId: number = 0
  // quantity is set to string as it comes from an text input form 
  quantity: string = '1'

  constructor(private cartService: CartService  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cartService.addToCart(this.productId, parseInt(this.quantity))
  }

}
