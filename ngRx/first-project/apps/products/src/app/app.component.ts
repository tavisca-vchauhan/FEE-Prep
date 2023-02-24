import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../../shared/services/data-service';
import { PRODUCTS_DATA_API_POINT } from '../../../shared/constants/api-endPoints';
import { Product } from './interfaces/product';
import * as productsData from '../assets/products';

@Component({
  selector: 'products-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class ProductsComponent implements OnInit {
  title = 'products';
  addToCartItem: Product = null;

  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef
  ) {}

  products: any[] = productsData.products.products;

  ngOnInit() {
    // this.dataService
    //   .getData(PRODUCTS_DATA_API_POINT.replace('COUNT', '10'))
    //   .subscribe((data) => {
    //     this.products = data.products;
    //     console.log(this.products);
    //   });
    //this.cd.detectChanges();
  }

  addToCart(product: Product) {
    this.addToCartItem = product;
    this.cd.detectChanges();
  }
}
