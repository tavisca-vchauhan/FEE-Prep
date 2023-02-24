import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductDetails, PaymentSummary } from '../../../../components';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetails,
    PaymentSummary,
    ProductCardComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  providers: [ProductDetails, PaymentSummary],
  bootstrap: [ProductsComponent],
})
export class ProductsModule {}
