# Store Front Tutorial
How to build store front app

## Initate Angular App
```bash
ng new storeFront
```
Test your new app with runnig it by:
```bash
ng serve --port 4100
```

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
## Display Product List

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
// import http client for making http requests
import { HttpClient } from '@angular/common/http'

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
    })
  }
}
```

Replace content of `src/app/app.component.html` with:
```html
<app-product-list></app-product-list>
```