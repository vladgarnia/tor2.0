import { Injectable } from '@angular/core';
import { AuthService } from '@app/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class IsLoggedInGuard implements CanActivate {
  constructor(private service: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.service.checkLogin();
  }
}
