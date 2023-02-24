import {
  OnInit,
  Component,
  Input,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../apps/products/src/app/interfaces/product';

@Component({
  selector: 'payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
})
export class PaymentSummary implements OnInit, OnChanges {
  @Input() addedItem: Product = null;
  @Input() isLoading = false;
  items: Product[] = [];
  heading = 'There is no item in your cart. Please try adding one.';
  cartTotal = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoading = true;
    if (changes && !changes['addedItem'].firstChange) {
      this.cartTotal += changes['addedItem'].currentValue.price;
      console.log(changes);
      this.heading = 'Items in your Bag';
      if (this.items[0]) {
        this.items = [...this.items, changes['addedItem'].currentValue];
      } else {
        this.items = [changes['addedItem'].currentValue];
      }

      this.cd.detectChanges();
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
