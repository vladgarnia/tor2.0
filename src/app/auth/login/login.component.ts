import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppRootState } from '@app/state';
import { Credentials } from '@app/models';
import * as AppRootActions from '@app/state/app.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private builder: FormBuilder, private store: Store<AppRootState>) {
    this.createForm();
  }

  loginForm: FormGroup;
  title = 'Login';
  subtitle = 'Enter your e-mail address and your password to log on.';

  private createForm() {
    this.loginForm = this.builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  login() {
    const credentials = this.loginForm.value as Credentials;
    this.store.dispatch(new AppRootActions.Login(credentials));
  }
}
