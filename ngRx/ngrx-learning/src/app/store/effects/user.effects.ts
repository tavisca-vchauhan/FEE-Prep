import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.UserActionType.GetUsers),
      mergeMap(() =>
        this.dataService.getList('users').pipe(
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
