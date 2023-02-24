import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = null;
  @Output() addToCart = new EventEmitter<Product>();

  ngOnInit(): void {}

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
