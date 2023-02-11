import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from '@shared/store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserEffects } from '../../../users/src/app/store/effects/user.effects';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    true ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}
