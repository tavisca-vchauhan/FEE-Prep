import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromUser from './user.reducer';
import * as fromProduct from './product.reducer';
import * as fromUserState from '../state/user.state';
import * as fromProductState from '../state/product.state';

export interface AppState {
  [fromUserState.user_state_name]: fromUserState.UserState;
  [fromProductState.product_state_name]: fromProductState.ProductState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  [fromUserState.user_state_name]: fromUser.userReducer,
  [fromProductState.product_state_name]: fromProduct.productReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
