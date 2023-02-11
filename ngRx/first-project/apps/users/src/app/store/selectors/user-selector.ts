import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState, USER_STATE_NAME } from '../state/user.state';

const userFeatureState = createFeatureSelector<UserState>(USER_STATE_NAME);

export const getUserList = createSelector(
  userFeatureState,
  (state) => state.users
);

export const getUserListError = createSelector(
  userFeatureState,
  (state) => state.error
);

export const isUserListLoading = createSelector(
  userFeatureState,
  (state) => state.loading
);

export const isUserListLoaded = createSelector(
  userFeatureState,
  (state) => state.loaded
);
