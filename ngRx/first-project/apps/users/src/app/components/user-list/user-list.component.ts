import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/state';
import { getUserList } from '../../store/selectors/user-selector';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private store: Store<UserState>) {}

  userList: User[] = null;

  ngOnInit(): void {
    this.store.select(getUserList).subscribe((user) => (this.userList = user));
  }
}
