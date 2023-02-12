import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GetUserList } from '../../store/actions';
import { UserState } from '../../store/state';
import { isUserListLoaded } from '../../store/selectors/user-selector';
import { Router } from '@angular/router';

@Component({
  selector: 'user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.scss'],
})
export class UserByIdComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<UserState>,
    private router: Router
  ) {}

  userIdForm = this.fb.group({
    userId: ['', Validators.required],
  });

  ngOnInit() {}

  get userId() {
    return this.userIdForm.get('userId');
  }

  ShowDetails() {
    if (this.userIdForm.valid) {
      this.store.select(isUserListLoaded).subscribe((userListLoaded) => {
        if (!userListLoaded) {
          this.store.dispatch(new GetUserList());
        }
        this.router.navigate([
          'users/user-details',
          this.userIdForm.value.userId,
        ]);
      });
    } else {
      this.userIdForm.markAllAsTouched();
    }
  }
}
