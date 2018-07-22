import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder) {
    this.createForm();
  }

  registerForm: FormGroup;
  title = 'Register';
  subtitle = 'Enter your e-mail address and your password to log on.';

  private createForm() {
    this.registerForm = this.builder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
}
