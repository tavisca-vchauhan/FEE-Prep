import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromUser from './user.reducer';
import * as fromUserState from '../state/user.state';
import * as fromProduct from './product.reducer';

export interface State {
  [fromUser.userFeatureKey]: fromUserState.UserState;
  [fromProduct.productFeatureKey]: fromProduct.State;
}

export const reducers: ActionReducerMap<State, any> = {
  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromProduct.productFeatureKey]: fromProduct.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
