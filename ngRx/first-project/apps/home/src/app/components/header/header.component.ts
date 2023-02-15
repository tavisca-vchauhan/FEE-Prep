import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { NavigationStart, Router } from '@angular/router';
import { AppState } from '@shared/store/state';
import { UserLogout } from '@shared/store/actions';

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
    this.store.dispatch(new UserLogout());
    localStorage.clear();
    this.router.navigate(['login']);
  }

  goBack() {
    this.location.back();
  }
}
