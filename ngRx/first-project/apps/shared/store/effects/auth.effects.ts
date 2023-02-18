import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, catchError, map, of } from 'rxjs';
import * as loginAction from '../actions/app.actions';
import { AuthService } from '../../../login/src/app/services/auth-service/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginAction.AppActionsType.USER_LOGIN),
      switchMap((action: any) =>
        this.authService.login(action.cred).pipe(
          map(
            (response) =>
              new loginAction.UserLoginSuccess({ userToken: response.token })
          ),
          catchError((err) =>
            of(new loginAction.UserLoginFailure({ error: err }))
          )
        )
      )
    )
  );
}
