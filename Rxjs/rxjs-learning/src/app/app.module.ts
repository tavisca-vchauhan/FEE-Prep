import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfComponent } from './components/of/of.component';
import { FromComponent } from './components/from/from.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TakeComponent } from './components/take/take.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    FromComponent,
    FromEventComponent,
    DebounceTimeComponent,
    TakeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
