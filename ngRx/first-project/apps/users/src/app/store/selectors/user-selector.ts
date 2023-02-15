import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState, USER_STATE_NAME } from '../state/user.state';

const userFeatureState = createFeatureSelector<{ userState: UserState }>(
  USER_STATE_NAME
);

export const getUserList = createSelector(
  userFeatureState,
  (state) => state?.userState?.users
);

export const getUserListError = createSelector(
  userFeatureState,
  (state) => state?.userState?.error
);

export const isUserListLoading = createSelector(
  userFeatureState,
  (state) => state?.userState?.loading
);

export const isUserListLoaded = createSelector(userFeatureState, (state) => {
  return state?.userState?.loaded;
});

export const nextPage = createSelector(
  userFeatureState,
  (state) => state?.userState?.page
);
