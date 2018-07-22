import { AppActions, AppActionTypes } from './app.actions';
import { AppRootState } from './app.state';

const initialState: AppRootState = {
  messages: [],
  user: null
};

export function reducer(state = initialState, action: AppActions): AppRootState {
  switch (action.type) {
    case AppActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload
      };
    case AppActionTypes.ShowFlashMessage:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    case AppActionTypes.ClearFlashMessage:
      return {
        ...state,
        messages: state.messages.filter(message => message !== action.payload)
      };
    case AppActionTypes.Logout:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
