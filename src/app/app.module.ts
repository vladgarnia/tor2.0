import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppCoreModule } from '@app/core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducer, AppEffects } from '@app/state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenLocalStorageGetter } from '@app/utils';
import { AppAuthModule } from '@app/auth/auth.module';
import { AppRoutingModule } from '@app/app.router';
import { AppLayoutModule } from '@app/layout';
import { PagesModule } from '@app/pages';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppCoreModule,
    AppAuthModule,
    AppLayoutModule,
    PagesModule,
    StoreModule.forRoot({
      applicationState: reducer
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Angular 6 Template',
      maxAge: 25,
      logOnly: environment.production
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenLocalStorageGetter
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
