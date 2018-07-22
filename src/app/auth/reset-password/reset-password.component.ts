import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor() { }

  title = 'Reset password';
  subtitle = 'Enter your e-mail address to receive further instructions about resetting your password';
  email = '';
}
