import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/state';
import { getUserList } from '../../store/selectors/user-selector';
import { Location } from '@angular/common';

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  @Input() id = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store<UserState>,
    private cd: ChangeDetectorRef
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  user: User = null;
  users: User[];

  ngOnInit() {
    this.store
      .select(getUserList)
      .subscribe(
        (users) => (this.user = users?.find((user) => user.id == this.id))
      );
    this.cd.detectChanges();
  }
}
