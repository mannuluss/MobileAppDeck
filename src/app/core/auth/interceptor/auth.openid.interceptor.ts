import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthKeycloakService } from '@core/auth/services/AuthKeycloakLocal.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthOpenIdInterceptor implements HttpInterceptor {
  constructor(private authService: AuthKeycloakService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the bearer token from wherever you store it (e.g., local storage, session storage, etc.)
    const bearerToken = this.authService.accessToken;

    let headers: any = {};
    headers.Authorization = `Bearer ${bearerToken}`;
    //si ya esta logeado se envia el idUsuario
    if (
      this.authService.idUsuario &&
      !request.url.includes(environment.keycloak.url)
    ) {
      headers.idusuario = this.authService.idUsuario;
    }
    // Clone the request and add the authorization header
    const authRequest = request.clone({
      setHeaders: { ...headers },
    });

    // Pass the modified request to the next interceptor or the HTTP handler
    return next.handle(authRequest);
  }
}

export const authOpenIdInterceptorProviders = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthOpenIdInterceptor,
  multi: true,
};
