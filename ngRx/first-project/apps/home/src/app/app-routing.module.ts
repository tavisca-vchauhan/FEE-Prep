import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app.component';
import { AuthGuard } from '../../../../apps/shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: '.',
    component: HomeComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('../../../users/src/app/app.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../../../products/src/app/app.module').then(
        (m) => m.ProductsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../../../login/src/app/app.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
