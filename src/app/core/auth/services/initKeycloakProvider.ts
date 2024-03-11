import { APP_INITIALIZER } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

const initializeKeycloak = (keycloak: KeycloakService) => {
  return () =>
    keycloak.init({
      config: environment.keycloak,
      initOptions: {
        onLoad: 'check-sso',
        enableLogging: true,
        //silentCheckSsoRedirectUri: null
          //window.location.origin + '/assets/silent-check-sso.html',
      },
    });
};

export const initKeycloakProvider = {
  provide: APP_INITIALIZER,
  useFactory: initializeKeycloak,
  multi: true,
  deps: [KeycloakService],
};
