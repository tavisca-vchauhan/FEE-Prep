import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [LoginComponent],
})
export class LoginModule {}
