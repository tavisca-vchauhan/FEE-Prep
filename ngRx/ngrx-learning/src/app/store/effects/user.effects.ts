import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import * as userActions from '../actions/user.actions';
import { USERS_DATA_URL } from '../../constants';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserActionType.GetUsers),
      mergeMap(() =>
        this.dataService.getList(USERS_DATA_URL).pipe(
          map((users) => userActions.GetUserListSuccess({ userList: users })),
          catchError((err) =>
            of(
              userActions.GetUserListFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );
}
