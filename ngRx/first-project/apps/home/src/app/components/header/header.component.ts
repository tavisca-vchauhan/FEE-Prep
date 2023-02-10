import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store/state';
import { UserLogoutSuccess } from '@shared/store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isUserLoggedIn: boolean = false;
  constructor(private store: Store<AppState>) {}

  onLogOut() {
    this.store.dispatch(new UserLogoutSuccess());
  }
}
