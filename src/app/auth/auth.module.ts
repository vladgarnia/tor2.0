import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth.router';
import { AuthService } from './auth.service';
import { AppSharedModule } from '@app/shared';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent
  ],
  providers: [AuthService],
  imports: [
    AppSharedModule,
    AuthRoutingModule
  ]
})
export class AppAuthModule { }
