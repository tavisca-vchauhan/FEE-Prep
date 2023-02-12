import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store/state';
import { userLoginStatus } from '@shared/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'home';
  isUserLoggedIn = false;
  data: any;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.store.select(userLoginStatus).subscribe((status) => {
      this.isUserLoggedIn = status;
    });
    this.cd.detectChanges();
  }
}
