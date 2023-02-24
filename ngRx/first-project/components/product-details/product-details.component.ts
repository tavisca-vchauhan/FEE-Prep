import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetails implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('ProductDetails');
  }
}
