import { Component } from '@angular/core';
import { ProductList } from './product-list';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent {
  productList: ProductList = new ProductList();
}
