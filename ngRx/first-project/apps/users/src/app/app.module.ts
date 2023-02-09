import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: [],
  bootstrap: [UserComponent],
})
export class UsersModule {}
