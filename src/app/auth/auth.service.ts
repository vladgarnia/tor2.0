import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jwtDecode from 'jwt-decode';
import { Credentials, User } from '@app/models';
import { Observable, of } from 'rxjs';
import { JWT_LOCAL_STORAGE_KEY } from '@app/utils';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  private baseUrl = 'a';

  login(credentials: Credentials): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/l`, credentials);
  }

  logout(): void {
    this.clearToken();
    this.router.navigateByUrl('');
  }

  checkLogin(): boolean {
    const isLoggedIn = this.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigateByUrl('auth/login', {
        queryParams: {
          backTo: this.router.url
        }
      });
    }
    return isLoggedIn;
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token || this.isTokenExpired(token)) {
      this.clearToken();
      return false;
    }
    return true;
  }

  setToken(token: string) {
    if (token) {
      localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token);
    }
  }

  getToken(): string {
    return localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
  }

  clearToken(): void {
    localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
  }

  getUser(): User {
    if (!localStorage.getItem(JWT_LOCAL_STORAGE_KEY)) {
      return null;
    }
    const { firstName, lastName, sub } = jwtDecode(localStorage.getItem(JWT_LOCAL_STORAGE_KEY));
    return {
      userName: sub,
      firstName,
      lastName
    };
  }

  private getTokenExpirationDate(token: string): Date {
    const decoded = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  private isTokenExpired(token?: string): boolean {
    if (!token) {
      token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);
    }
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }
}
