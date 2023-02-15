import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../../interfaces/user';
import { UserState } from '../../store/state';
import { getUserList, getUserListError } from '../../store/selectors';
import { GetUserList } from '../../store/actions';
import { isUserListLoaded } from '../../store/selectors/user-selector';

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  id = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store<UserState>,
    private cd: ChangeDetectorRef
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  user: User = null;
  users: User[];
  error: any;

  DUMMY_PROFILE_IMAGE = '../../../assets/images/profile-img.jpg';

  ngOnInit() {
    this.store.select(isUserListLoaded).subscribe((userListLoaded) => {
      if (!userListLoaded) {
        this.store.dispatch(new GetUserList());
      }
    });
    this.store.select(getUserList).subscribe((users) => {
      this.user = users?.find((user) => user.id == this.id);
    });
    this.store.select(getUserListError).subscribe((err) => {
      this.error = err;
    });
    this.cd.detectChanges();
  }
}
