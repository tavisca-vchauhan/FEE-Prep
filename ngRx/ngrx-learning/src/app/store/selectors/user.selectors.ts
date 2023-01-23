import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userStateFeatureKey } from '../state/user.state';

const getUserFeatureState =
  createFeatureSelector<UserState>(userStateFeatureKey);

export const getUsers = createSelector(
  getUserFeatureState,
  (state) => state.userList
);

export const getError = createSelector(
  getUserFeatureState,
  (state) => state.error
);
