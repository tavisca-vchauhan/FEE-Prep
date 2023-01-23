import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserService } from '../../services/user-service/user.service';
import * as userAction from '../../store/actions/user.actions';
import * as fromUser from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter = 0;
  data: any | undefined;
  constructor(
    private userService: UserService,
    private store: Store,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  onIncrement() {
    this.counter++;
    // this.userService.getList('users').subscribe((data: any) => {
    //   this.data = data;
    //   this.cd.detectChanges();
    // });

    this.store.dispatch(new userAction.GetUsersList()); // action dispatch
  }

  onDecrement() {
    this.counter--;
    this.store.pipe(select(fromUser.getUsers)).subscribe((users) => {
      this.data = users;
    });
    console.log(this.data);
  }

  onReset() {
    this.counter = 0;
    this.data = undefined;
    this.cd.detectChanges();
  }
}
