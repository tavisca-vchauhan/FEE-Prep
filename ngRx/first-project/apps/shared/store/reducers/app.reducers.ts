import { initialAppState, AppState } from '../state/app.state';
import { AppActionsType, AppActions } from '../actions/app.actions';

export function appReducer(
  state = initialAppState,
  action: AppActions
): AppState {
  switch (action.type) {
    case AppActionsType.USER_LOGIN:
      return {
        ...state,
      };
    case AppActionsType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case AppActionsType.USER_LOGIN_FAIL:
      return {
        ...state,
        isUserLoggedIn: false,
        error: action.payload.error,
      };
    case AppActionsType.USER_LOGOUT:
      return {
        ...state,
      };
    case AppActionsType.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    case AppActionsType.USER_LOGOUT_FAIL:
      return {
        ...state,
        isUserLoggedIn: true,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
}
