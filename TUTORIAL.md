# Store Front Tutorial
How to build store front app

## Initate Angular App
Create application:
```bash
ng new storeFront
```
Start application:
```bash
ng serve --port 4100
```
It should display standard angular app front page.

Add remote git repository:
```bash
git remote add origin <reporitory_url>
```
## Create Product Model
```bash
mkdir src/app/models
touch src/app/models/Product.ts
```
`src/app/models/Product.ts`:
```typescript
export class Product {
  id: number
  name: string
  categoryId: number
  description: string
  price: number
  url: string

  constructor() {
    this.id = 0
    this.name = ''
    this.categoryId = 0
    this.description = ''
    this.price = 0
    this.url = ''  
  }
}
```

## Get Products from server
In lieu of server add: `mock_products.json` to `src/assets`
```bash
touch src/assets/mock_products.json
```
```javascript
[{"id":6,"name":"Book","price":9.99,"url":"https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","description":"You can read it!","category_id":1},
{"id":7,"name":"Headphones","price":249.99,"url":"https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","description":"Listen to stuff!","category_id":2},
{"id":8,"name":"Backpack","price":79.99,"url":"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","description":"Carry things around town!","category_id":8},
{"id":9,"name":"Glasses","price":129.99,"url":"https://images.unsplashcom/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","description":"Now you can see!","category_id":8},
{"id":10,"name":"Cup","price":4.99,"url":"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80","description":"Drink anything with it!","category_id":7},
{"id":11,"name":"Shirt","price":29.99,"url":"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80","description":"Wear it with style!","category_id":3}
]
```
Create ProductService:
```bash
mkdir src/app/services
ng g s services/ProductService
```

To be able to make http calls add code to `src/app/app.modul.ts`:
```typescript
// import HttpClientModule for making http requests
import { HttpClientModule } from '@angular/common/http'
    // ...
    imports: [
        HttpClientModule
    // ...
```
- import http client for making http requests
- add HttpClientModule to `@NgModule`'s `imports`

To get data using from a server add code to `src/app/services/product-service.ts`:
```typescript
// import Obervables to create data stream
import { Observable } from 'rxjs';
// import HttpClient to make http requests
import { HttpClient } from '@angular/common/http'
// import Product model
import { Product } from './../models/Product'

// ...

    // inject HttpClient dependency to constructor
    constructor(private htttp: httpClient){}

    // get data from web server, return a data stream of array of Products
    getProducts(): Observable<Product[]> {
        return this.http.get<[]>('./assets/mock_products.json')
    }
// ...
```


<hr />
<hr />


TODO:
Add item added to cart message on product list and product detail pages

TODO
add error messages under input boxes

TODO
finalize credit card lenght info

Setup
Install node
Install nvm node version manager:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
User nvm to install the latest version of node:

nvm install node
If you don't have angular installed, run:

sudo npm install -g @angular/cli
Start application:

ng serve
Open browser at:

localhost:4200
If you want ot use another port open application by providing the desired port number:

ng serve --port 4100


Install `nvm` node version manager:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
User `nvm` to install the latest version of node:
```bash
nvm install node
```

If you don't have `angular` installed, run:
```bash
sudo npm install -g @angular/cli
```

Start application:
```bash
ng serve
```

Open browser at:
```
localhost:4200
```
If you want ot use another port open application by providing the desired port number:
```bash
ng serve --port 4100
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Get Products from web server

### Create Product Model
```bash
mkdir src/app/models
touch src/app/models/Product.ts
```

`src/app/models/Product.ts`:
```typescript

```


### Create ProductList Component
```bash
mkdir src/app/components
ng g c components/ProductList
```

`src/app/components/product_list/product_list.component.ts`:
```typescript
// import product_service to get products
import { ProductServiceService } from 'src/app/services/product-service.service';
// import Product model
import { Product } from './../../models/Product'

//...

export class ProductListComponent implements OnInit {

  // variable to store array of products
  products: Product[] = []  

  // inject productService to constructor
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    // get product data
    this.productService.getProducts().subscribe( data => {
      this.products = data
      console.log(`products received: ${JSON.stringify(this.products, null, 4)}`)

    })
  }
}
```

Replace content of `src/app/app.component.html` with:
```html
<app-product-list></app-product-list>
```
CHECK POINT : running `ng serve` you should see see the list of products in console


## Display Product List

Create product component to use it display each product on page.

### Create Product Component

```bash
ng g c components/Product
```


### Setup Product List to display product list
replace content of `src/app/components/product-list/product-list.component.html` with:
```html
<!--
    use input property binding to bind product in product-list component
    to product in product component
 -->
<app-product *ngFor="let product of products" [product]="product"></app-product>
```

CHECK POINT: webpage should show a `product works!` for each product in our list

### display product

`src/app/components/product/product.component.html`:
```html

```
## Set up router

Run ng generate to create the application routing module.
```bash
ng generate module app-routing --flat --module=app
```
--flat Puts the file in src/app instead of its own directory.
--module=app Tells ng generate to register it in the imports array of the AppModule.

Add code to `src/app/app-routing.module.ts`
- import router
- import components
- create routes
- add RouterModule to `@NgModule` imports
- add RouterModule to `@NgModule` exports

```typescript

```

### Create NavBar Component
```bash
ng g c components/NavBar
```
`src/app/components/nav-bar/nav-bar.component.ts`:
- import Router
- add Router as constructor parameter

`src/app/components/nav-bar/nav-bar.component.html`:
- use `routerLink="/products"` instead of `href=`, it allows navigation without reloading the pages

`src/app/app-component.html`:
replace content with:
```html
<app-nav-bar></app-nav-bar>
<router-outlet></router-outlet>
```
This will display nav-bar on every page and lets the router fill the rest of the page with conent based on the page requested.

CHECK POINT: navigating to localhost:4200 will automatically redirect to localhost:4200/products and a link to `Products` is displayed as part of the navigation bar


## Add Product Detail Page

The product detail page will display details of the product. It will be served when asked for path `/products/productId`.

Create ProductDetail component:
```bash
ng g c components/ProductDetail
```

Setup click on product to open product detail page of project:
`src/app/components/product-list/product-list.component.html`
- put each product in a  <li> tag
- wrap each product in an <a> tag within the <li> tag setting the routerLink property to `/products/{{product.id}}
- add `/products/:productId` route to routes array in `src/app/app-routing-module.ts`

CHECK POINT: at this point clicking on any project should take you a product detail page which says: "product-detail works!"


Create getProduct method in `src/app/services/product-service.service.ts`


`src/app/components/product-detail/product-detail.component.ts`:
- import product model
- import product service
- add product service as private parameter to constructor
- import ActvatedRoute to be able to get productId from url path
- add activatedRoute as private parameter to constructor
- create product variable
- in OnInit use activetedRoute to get id from url, use productService to get products and select required product


`src/app/components/product-detail/product-detail.component.html`:
- use product component to display product


### Add possibility to create a cart

#### Create models
OrderItem Model
```bash
touch src/app/models/OrderItem.ts
```
Order Model
```bash
touch src/app/models/Order.ts
```

#### Create cartservice
```bash
ng g s services/Cart
```
- create `cart` variable
- add `addToCart()` function

#### Create addToCart component

```bash
ng g c components/addToCart
```


To create the form 

`src/app/app.module.ts`
- import `FormsModule`
- add `FormsModule` to `@NgModule` `imports` array

`src/app/components/add-to-cart/add-to-cart.component.ts`
- import Input decorator
- import CartService
- add cartService as private parameter to constructor
- @Input() productId property from parent component
- add quantity property
- add onSubmit method

`src/app/components/add-to-cart/add-to-cart.component.html`
```html
<!-- use (ngSubmit) event listener to listen to submit event and set function to call -->
<form (ngSubmit)="onSubmit()">
    <!-- use interpolation {{ }} to display productId property -->
    <p>{{productId}}</p>
    <label for="quantity">Quantity</label>
    <!-- use two way binding [( )] to bind input to quantity property -->
    <!-- input tag's name property has to be set -->
    <input type="text" id="quantity" name="quantity" [(ngModel)]="quantity">
    <button type="submit">Add To Cart</button>
</form>
```

### Add cart page to application

Generate Cart component:
```bash
ng g c components/Cart
```

`src/app/app-routing-module.ts`
- add cart path to routes

`src/app/components/nav-bar/nav-bar.component.html`
- add link to cart

`src/app/services/cartService.ts`
- add getCart() method

`src/app/components/cart/cart.component.ts`
- import Order Model
- import CartService
- add cartService as private parameter to constructor
- add cart variable
- in OnInit initialize cart variable by calling cartService's getCart()

Create OrderItem component
```bash
ng g c components/OrderItem
```
`src/app/components/order-item/order-item.component.ts`
- import OrderItem model
- import Input decorater
- add OrderItem property, use @Input()

