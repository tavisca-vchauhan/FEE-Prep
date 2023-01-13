import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FromEventComponent,
  FromComponent,
  OfComponent,
  DebounceTimeComponent,
  TakeComponent,
} from './components';

const routes: Routes = [
  {
    path: 'of-operator',
    component: OfComponent,
  },
  {
    path: 'from-operator',
    component: FromComponent,
  },
  {
    path: 'fromEvent-operator',
    component: FromEventComponent,
  },
  {
    path: 'debounceType-operator',
    component: DebounceTimeComponent,
  },
  {
    path: 'take-operator',
    component: TakeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
