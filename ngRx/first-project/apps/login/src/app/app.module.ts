import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [LoginComponent],
  exports: [ReactiveFormsModule],
})
export class LoginModule {}
