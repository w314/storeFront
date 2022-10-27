import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Form } from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  name: string = ''
  address: string = ''
  creditCard: string = ''
  success: boolean = false


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    sessionStorage.setItem('name', this.name)
    this.success = true
    // console.log('checkout submit button clicked')
    // this.router.navigate(['checkout','success'])
  }

}
