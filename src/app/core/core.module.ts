import { NgModule } from '@angular/core';
import { IsLoggedInGuard, IsLoggedOutGuard } from './guards';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor, AuthInterceptor } from './interceptors';

@NgModule({
  providers: [
    IsLoggedInGuard,
    IsLoggedOutGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppCoreModule { }
