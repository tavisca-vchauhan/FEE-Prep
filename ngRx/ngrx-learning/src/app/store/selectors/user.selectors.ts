import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, user_state_name } from '../state/user.state';

const getUserFeatureState = createFeatureSelector<UserState>(user_state_name);

export const getUsers = createSelector(
  getUserFeatureState,
  (state) => state.userList
);

export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);
