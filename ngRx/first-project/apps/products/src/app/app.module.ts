import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [ProductsComponent],
})
export class ProductsModule {}
