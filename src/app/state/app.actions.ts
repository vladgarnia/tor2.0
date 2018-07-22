import { Credentials, User, FlashMessage } from '@app/models';
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  Initialize = '[App] Initialize',
  InitializeComplete = '[App] Initialize Complete',
  Login = '[App] Login',
  LoginFail = '[App] Login Fail',
  LoginSuccess = '[App] Login Success',
  Logout = '[App] Logout',
  ShowFlashMessage = '[App] Show Flash Message',
  ClearFlashMessage = '[App] Clear Flash Message'
}

export class Initialize implements Action {
  readonly type = AppActionTypes.Initialize;
}

export class InitializeComplete implements Action {
  readonly type = AppActionTypes.InitializeComplete;
}

export class Login implements Action {
  readonly type = AppActionTypes.Login;

  constructor(public payload: Credentials) { }
}

export class LoginSuccess implements Action {
  readonly type = AppActionTypes.LoginSuccess;

  constructor(public payload: User) { }
}

export class LoginFail implements Action {
  readonly type = AppActionTypes.LoginFail;

  constructor(public payload: string) { }
}

export class Logout implements Action {
  readonly type = AppActionTypes.Logout;
}

export class ShowFlashMessage implements Action {
  readonly type = AppActionTypes.ShowFlashMessage;

  constructor(public payload: FlashMessage) { }
}

export class ClearFlashMessage implements Action {
  readonly type = AppActionTypes.ClearFlashMessage;

  constructor(public payload: FlashMessage) { }
}

export type AppActions = Login
  | LoginSuccess
  | LoginFail
  | Logout
  | ShowFlashMessage
  | ClearFlashMessage
  | Initialize
  | InitializeComplete;
