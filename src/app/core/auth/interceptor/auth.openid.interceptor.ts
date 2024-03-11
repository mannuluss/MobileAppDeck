import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthKeycloakService } from '@core/auth/services/AuthKeycloakLocal.service';

@Injectable()
export class AuthOpenIdInterceptor implements HttpInterceptor {
  constructor(private authService: AuthKeycloakService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the bearer token from wherever you store it (e.g., local storage, session storage, etc.)
    const bearerToken = this.authService.accessToken;

    // Clone the request and add the authorization header
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    // Pass the modified request to the next interceptor or the HTTP handler
    return next.handle(authRequest);
  }
}

export const authOpenIdInterceptorProviders = {
  provide: AuthOpenIdInterceptor,
  useClass: AuthOpenIdInterceptor,
  multi: true,
};
