import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import * as productActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.ProductActionType.GetProduct),
      mergeMap(() =>
        this.dataService.getList('products').pipe(
          map(
            (products) =>
              new productActions.GetProductSuccess({ products: products })
          ),
          catchError((err) =>
            of(new productActions.GetProductFailure({ error: err }))
          )
        )
      )
    )
  );
}
