import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { User } from '../../interfaces';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/state';
import {
  getUserList,
  isUserListLoaded,
  isUserListLoading,
} from '../../store/selectors/user-selector';
import { GetUserList, NextPage } from '../../store/actions/user-actions';
import { nextPage } from '../../store/selectors/user-selector';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private store: Store<UserState>, private cd: ChangeDetectorRef) {}

  userList: User[] = [];
  isUserListLoading: boolean = false;

  ngOnInit(): void {
    this.getUsers();
    this.store
      .select(isUserListLoading)
      .subscribe((isLoading) => (this.isUserListLoading = isLoading));
    this.cd.detectChanges();
  }

  getUsers() {
    this.store.select(isUserListLoaded).subscribe((isUserListLoaded) => {
      if (!isUserListLoaded) {
        this.store.dispatch(new GetUserList());
      }
    });
    this.store.select(getUserList).subscribe((user) => (this.userList = user));
    this.cd.detectChanges();
  }

  loadMoreData() {
    this.store.dispatch(new NextPage()); // on nextPage action, isLoading set to true so that GetUserList will get called again.
  }
}
