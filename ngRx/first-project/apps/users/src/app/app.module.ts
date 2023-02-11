import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserByIdComponent } from './components/user-by-id/user-by-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer, metaReducers } from './store/reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { USER_STATE_NAME } from './store/state';

@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    UserListComponent,
    UserByIdComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(USER_STATE_NAME, reducer, { metaReducers }),
    true ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [UserComponent],
})
export class UsersModule {}
