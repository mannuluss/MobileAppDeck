import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, of, tap } from 'rxjs';
import { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';
import { Router } from '@angular/router';
import { AlertMessageService } from '@core/alert-message/alert-message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthKeycloakService {
  private readonly keycloakUrl =
    environment.keycloak.url +
    `/realms/${environment.keycloak.realm}/protocol/openid-connect/token`;

  get accessToken() {
    return localStorage.getItem('token');
  }

  get refreshToken() {
    return localStorage.getItem('refreshToken');
  }

  get expiresIn() {
    return localStorage.getItem('expiresIn');
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

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertMessageService
  ) {}

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
      .pipe(
        catchError((error) => {
          console.log('login error', error);
          let msj = '';
          switch (error.status) {
            case 401:
              msj = 'Clave o contrasela incorrecta.'; //TODO: HTTP.LOGIN.ERROR_404
              break;
            default:
              msj = error; //TODO: HTTP.LOGIN.UNKNOWN_ERROR
              break;
          }
          this.alertService.presentToast(msj, 'danger');
          return error;
        }),
        tap((data: any) => this.saveLocalStorage(data))
      );
  }

  isLogin() {
    return of(this.accessToken ? true : false);
  }

  logout() {
    localStorage.clear();
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
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
    localStorage.setItem('expiresIn', data.expires_in);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
