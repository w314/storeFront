# Store Front Tutorial
How to build store front app

## Initate Angular App
```bash
ng new storeFront
```
CHECK POINT: test your new app by runnig it:
```bash
ng serve --port 4100
```
It should display standard angular app front page.

### Setup GIT 
Add remote repository:
```bash
git remote add origin <reporitory_url>
```
Add initial commit:
```bash
git add .
git commit -m 'feat: Intial commit'
```
## Get Products from web server

### Create Product Model
```bash
mkdir src/app/models
touch src/app/models/Product.ts
```

`src/app/models/Product.ts`:
```typescript

```

### Create ProductService to get products
```bash
mkdir src/app/services
ng g c ProductService
```

To be able to make http calls add code to `src/app/app.modul.ts`:
```typescript
// import HttpClientModule for making http requests
import { HttpClientModule } from '@angular/common/http'

//@NgModule({
    // ...
    imports: [
        HttpClientModule
    ]
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
`src/app/components/product-list/product.component.ts`
```typescript

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

`src/app/components/product-list/product.component.html`:
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
`src/app/components/nav-bar/nav-bar.component.html`:
- import Router
- add Router as constructor parameter