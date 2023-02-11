import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataService } from '@shared/services/data-service';
import { USERS_DATA_URL } from '@shared/constants/constant';
import * as userAction from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  getUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.UserActionsType.GET_USER_LIST),
      mergeMap(() =>
        this.dataService.getData(USERS_DATA_URL).pipe(
          map(
            (usersList) =>
              new userAction.GetUserListSuccess({ usersList: usersList })
          ),
          catchError((error) =>
            of(new userAction.GetUserListFailure({ error: error }))
          )
        )
      )
    )
  );
}
