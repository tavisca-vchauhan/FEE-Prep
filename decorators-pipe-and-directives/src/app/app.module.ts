import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyColorDirective } from './directives/applyColor.directive';
import { MyNgIfDirective } from './directives/myNgIf.directive';
import { MyNgForDirective } from './directives/myNgFor.directive';
import { SquarePipe } from './pipes/square.pipe';
import { PowerPipe } from './pipes/power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApplyColorDirective,
    MyNgIfDirective,
    MyNgForDirective,
    SquarePipe,
    PowerPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
