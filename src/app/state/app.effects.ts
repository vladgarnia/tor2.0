import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { AuthService } from '@app/auth';
import { Observable, of } from 'rxjs';
import {
  AppActionTypes, Login, ShowFlashMessage,
  ClearFlashMessage, LoginSuccess, InitializeComplete, LoginFail
} from '@app/state/app.actions';
import { mergeMap, map, delay, tap, catchError } from 'rxjs/operators';
import { Credentials, FlashMessage, FlashMessageType } from '@app/models';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private service: AuthService,
    private router: Router
  ) { }

  @Effect()
  initialize$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.Initialize),
    mergeMap(() => {
      const user = this.service.getUser();
      if (user) {
        return [
          new LoginSuccess(user),
          new InitializeComplete()
        ];
      }
      return [new InitializeComplete()];
    })
  );

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.Login),
    map((action: Login) => action.payload),
    mergeMap((credentials: Credentials) => this.service.login(credentials).pipe(
      mergeMap((token: string) => {
        this.service.setToken(token);
        this.router.navigateByUrl('');
        return [
          new LoginSuccess(this.service.getUser()),
          new ShowFlashMessage(loginSuccessFlashMessage)
        ];
      }),
      catchError(error => of(new LoginFail(error)))
    ))
  );

  @Effect({ dispatch: false })
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.Logout),
    tap(() => this.service.logout())
  );

  @Effect()
  showMessage$: Observable<Action> = this.actions$.pipe(
    ofType(AppActionTypes.ShowFlashMessage),
    map((action: ShowFlashMessage) => action.payload),
    mergeMap((message: FlashMessage) => of(new ClearFlashMessage(message))
      .pipe(delay(message.duration)))
  );
}

const loginSuccessFlashMessage: FlashMessage = {
  duration: 5000,
  message: 'Welcome back!',
  type: FlashMessageType.success
};
