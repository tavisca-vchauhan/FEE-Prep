import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ReactiveForm, TemplateDrivenForm],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule],
})
export class AppModule {}
