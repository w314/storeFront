import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  name: string = ''
  total: string = ''

  constructor() { }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('name') as string
    this.total = sessionStorage.getItem('total') as string
  }

}
