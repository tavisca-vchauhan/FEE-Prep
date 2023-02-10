import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '@shared/store/state';
import { userLoginStatus } from '@shared//store/selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private store: Store<AppState>) {}

  canActivate(next: any, state: AppState) {
    return this.store.select(userLoginStatus).subscribe((status) => status);
  }
}
