import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveForm, TemplateDrivenForm } from './components';

const routes: Routes = [
  {
    path: 'reactive-form',
    component: ReactiveForm,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenForm,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
