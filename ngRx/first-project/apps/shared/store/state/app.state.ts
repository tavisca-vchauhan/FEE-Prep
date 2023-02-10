export interface AppState {
  isUserLoggedIn: boolean;
  error: any;
}

export const initialAppState: AppState = {
  isUserLoggedIn: false,
  error: null,
};

export const APP_STATE_NAME = 'appState';
