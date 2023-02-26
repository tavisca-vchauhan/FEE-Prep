import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyColorDirective } from './directives/applyColor.directive';
import { MyNgIfDirective } from './directives/myNgIf.directive';
import { MyNgForDirective } from './directives/myNgFor.directive';
import { SquarePipe } from './pipes/square.pipe';
import { PowerPipe } from './pipes/power.pipe';
import {
  MyNgSwitchDirective,
  MyNgSwitchCaseDirective,
  MyNgSwitchCaseDefaultDirective,
} from './directives/myNgSwitch.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ApplyColorDirective,
    MyNgIfDirective,
    MyNgForDirective,
    SquarePipe,
    PowerPipe,
    MyNgSwitchDirective,
    MyNgSwitchCaseDirective,
    MyNgSwitchCaseDefaultDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
