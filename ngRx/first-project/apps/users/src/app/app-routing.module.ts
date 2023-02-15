import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserByIdComponent } from './components/user-by-id/user-by-id.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'users-list',
    component: UserListComponent,
  },
  {
    path: 'user-by-id',
    component: UserByIdComponent,
  },
  {
    path: 'user-details/:id',
    component: ShowDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
