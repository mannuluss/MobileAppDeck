import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthKeycloakService {
  private readonly keycloakUrl =
    environment.keycloak.url +
    `/realms/${environment.keycloak.realm}/protocol/openid-connect/token`;

  get accessToken() {
    return sessionStorage.getItem('token');
  }

  get refreshToken() {
    return sessionStorage.getItem('refreshToken');
  }

  get expiresIn() {
    return sessionStorage.getItem('expiresIn');
  }

  get user(): KeycloakTokenParsed {
    let token = localStorage.getItem('token');
    if (!token) return null;
    let payload = token.split('.')[1];
    let decoded = atob(payload);
    return JSON.parse(decoded).first;
  }

  get roles() {
    return this.user?.realm_access?.roles;
  }

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', environment.keycloak.clientId);
    //body.set('client_secret', environment.keycloak.clientSecret);
    body.set('username', username);
    body.set('password', password);

    return this.http
      .post(this.keycloakUrl, body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .pipe(tap((data: any) => this.saveLocalStorage(data)));
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  refreshTokenCall() {
    const body = new URLSearchParams();
    body.set('client_id', environment.keycloak.clientId);
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', this.refreshToken);

    return this.http
      .post(this.keycloakUrl, body.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .pipe(tap((data: any) => this.saveLocalStorage(data)));
  }

  saveLocalStorage(data: any) {
    sessionStorage.setItem('token', data.access_token);
    sessionStorage.setItem('refreshToken', data.refresh_token);
    sessionStorage.setItem('expiresIn', data.expires_in);
    sessionStorage.setItem('user', JSON.stringify(this.user));
  }
}
