import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/services';
import { UserComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserByIdComponent } from './components/user-by-id/user-by-id.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'users-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-by-id',
    component: UserByIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
