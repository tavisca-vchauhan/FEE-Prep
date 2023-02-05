import { Action } from '@ngrx/store';

export enum ProductActionType {
  GetProduct = '[Product] Get Products',
  GetProductSuccess = '[Product] Get Products Success',
  GetProductFailure = '[Product] Get Product Failure',
}

export class GetProducts implements Action {
  readonly type = ProductActionType.GetProduct;
}

export class GetProductSuccess implements Action {
  readonly type = ProductActionType.GetProductSuccess;
  constructor(public payload: { products: any }) {}
}

export class GetProductFailure implements Action {
  readonly type = ProductActionType.GetProductFailure;
  constructor(public payload: { error: any }) {}
}

export type ProductActions =
  | GetProducts
  | GetProductSuccess
  | GetProductFailure;
