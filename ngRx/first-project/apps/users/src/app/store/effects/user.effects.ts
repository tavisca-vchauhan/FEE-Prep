import { Injectable } from '@angular/core';
import { map, catchError, of, withLatestFrom, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DataService } from '@shared/services';
import { USERS_DATA_API_POINT } from '@shared/constants';
import * as userAction from '../actions';
import { UserState } from '../state';
import { nextPage } from '../selectors';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<UserState>
  ) {}

  getUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.UserActionsType.GET_USER_LIST),
      withLatestFrom(this.store.select(nextPage)),
      switchMap((page) =>
        this.dataService
          .getData(
            USERS_DATA_API_POINT.replace('COUNT', (page[1] * 2).toString())
          )
          .pipe(
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
