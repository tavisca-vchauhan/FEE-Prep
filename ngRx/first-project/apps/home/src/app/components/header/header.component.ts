import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { AppState } from '@shared/store/state';
import { UserLogoutSuccess } from '@shared/store/actions';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isUserLoggedIn: boolean = false;

  BACK_LOGO = '../../../assets/icons/left-arrow.png';

  showBackButton: boolean = false;

  constructor(
    private store: Store<AppState>,
    private location: Location,
    private router: Router
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.split('/').length > 2) {
          this.showBackButton = true;
        } else {
          this.showBackButton = false;
        }
      }
    });
  }

  ngOnInit() {}

  onLogOut() {
    this.store.dispatch(new UserLogoutSuccess());
  }

  goBack() {
    this.location.back();
  }
}
