import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-name',
  templateUrl: './product-name.component.html',
  styleUrls: ['./product-name.component.css'],
})
export class ProductNameComponent implements OnInit {
  @Input() name = '';

  constructor() {}

  ngOnInit(): void {}
}
