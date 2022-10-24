import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from 'src/app/models/OrderItem';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input() orderItem: OrderItem = {
    id: 0,
    productId: 0,
    quantity: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
