import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_STATE_NAME, AppState } from '../state/app.state';

const appFeatureState = createFeatureSelector<AppState>(APP_STATE_NAME);

export const userLoginStatus = createSelector(
  appFeatureState,
  (state) => state.isUserLoggedIn
);

export const userLogoutFailure = createSelector(
  appFeatureState,
  (state) => state.error
);
