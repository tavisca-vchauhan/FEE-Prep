import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromState from '../state/app.state';
import * as fromReducer from './app.reducers';

export interface State {
  [fromState.APP_STATE_NAME]: fromState.AppState;
}

export const appReducers: ActionReducerMap<State, any> = {
  [fromState.APP_STATE_NAME]: fromReducer.appReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
