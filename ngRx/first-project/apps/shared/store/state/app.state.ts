export interface AppState {
  isUserLoggedIn: boolean;
  userAuthToken: string;
  error: any;
}

export const initialAppState: AppState = {
  isUserLoggedIn: false,
  userAuthToken: null,
  error: null,
};

export const APP_STATE_NAME = 'appState';
