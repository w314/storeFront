import { Injectable } from '@angular/core';
// import Obervables to create data stream
import { Observable } from 'rxjs';
// import HttpClient to make http requests
import { HttpClient } from '@angular/common/http'

// import Product model
import { Product } from './../models/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // inject HttpClient dependency to constructor
  constructor(private http: HttpClient) { }

  // get data from web server, return a data stream of array of Products
  getProducts(): Observable<Product[]> {
    return this.http.get<[]>('./assets/mock_products.json')
  }

}
