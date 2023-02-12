import { UserState, USER_STATE_NAME } from '../state/user.state';
import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user-reducer';

export interface State {
  [USER_STATE_NAME]: UserState;
}

export const reducer: ActionReducerMap<State, any> = {
  [USER_STATE_NAME]: userReducer,
};
