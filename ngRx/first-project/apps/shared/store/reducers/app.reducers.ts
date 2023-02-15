import { initialAppState, AppState } from '../state/app.state';
import { AppActionsType, AppActions } from '../actions/app.actions';

export function appReducer(
  state = initialAppState,
  action: AppActions
): AppState {
  state = JSON.parse(localStorage.getItem('state'));
  switch (action.type) {
    case AppActionsType.USER_LOGIN:
      state = {
        ...state,
      };
      break;
    case AppActionsType.USER_LOGIN_SUCCESS:
      state = {
        ...state,
        isUserLoggedIn: true,
        userAuthToken: action.payload.userToken,
      };
      break;
    case AppActionsType.USER_LOGIN_FAIL:
      state = {
        ...state,
        isUserLoggedIn: false,
        error: action.payload.error,
      };
      break;
    case AppActionsType.USER_LOGOUT:
      state = initialAppState;
      break;
    default:
      state = { ...state };
  }
  localStorage.setItem('state', JSON.stringify(state));
  return state;
}
