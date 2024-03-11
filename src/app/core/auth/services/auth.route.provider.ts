import { APP_INITIALIZER, Provider } from '@angular/core';
import { AuthKeycloakService } from './AuthKeycloakLocal.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

function authFunctionRouteProvider(
  auth: AuthKeycloakService,
  route: Router
): () => Promise<any> {
  return () =>
    new Promise((resolve, reject) => {
      if (route.url === '/login') {
        return resolve(null);
      }
      auth
        .refreshTokenCall()
        .pipe(
          catchError((error) => {
            route.navigate(['/login']);
            resolve(null);
            return throwError(error);
          })
        )
        .subscribe((res) => {
          route.navigate(['/home']);
          resolve(null);
        });
    });
}

export const authRouteProviders: Provider[] = [
  AuthKeycloakService,
  {
    provide: APP_INITIALIZER,
    useFactory: authFunctionRouteProvider,
    deps: [AuthKeycloakService, Router],
    multi: true,
  },
];
