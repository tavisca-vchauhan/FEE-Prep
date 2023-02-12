import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserByIdComponent } from './components/user-by-id/user-by-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { USER_STATE_NAME } from './store/state';
import { UserEffects } from './store/effects/user.effects';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '@shared/components';

@NgModule({
  declarations: [
    UserComponent,
    UserCardComponent,
    UserListComponent,
    UserByIdComponent,
    ShowDetailsComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature(USER_STATE_NAME, reducer),
    true ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [],
  bootstrap: [UserComponent],
})
export class UsersModule {}
