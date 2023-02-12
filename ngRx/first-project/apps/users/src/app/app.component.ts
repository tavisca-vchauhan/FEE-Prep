import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './store/state';
import { GetUserList } from './store/actions/user-actions';
import { isUserListLoaded } from './store/selectors/user-selector';

@Component({
  selector: 'users-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class UserComponent {
  title = 'users';

  constructor(private store: Store<UserState>) {}

  getUserList() {
    this.store.select(isUserListLoaded).subscribe((isUserListLoaded) => {
      if (!isUserListLoaded) {
        this.store.dispatch(new GetUserList());
      }
    });
  }
}
