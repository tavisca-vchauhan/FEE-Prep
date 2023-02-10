import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '@shared/store/state';
import { userLoginStatus } from '@shared//store/selectors';
import { UrlTree, Router, CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree> {
    return this.store.select(userLoginStatus).pipe(
      map((isUserLoggedIn) => {
        if (!isUserLoggedIn) {
          return this.router.createUrlTree(['login']);
        } else {
          return true;
        }
      })
    );
  }
}
