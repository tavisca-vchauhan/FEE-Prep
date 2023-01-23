import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from 'src/app/services/user-service/user.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userSevice: UserService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserActionType.GetUsers),
      mergeMap((action) =>
        this.userSevice.getList('users').pipe(
          map((users) => new userActions.GetUserListSuccess({ data: users })),
          catchError((err) =>
            of(
              new userActions.GetUserListFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );
}
