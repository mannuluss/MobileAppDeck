// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://amacom.eastus2.cloudapp.azure.com/api',
  apiScrapingUrl: 'https://feliperojas.live/pythonscraping/api',
  apiAzureRepository: 'https://gethomepages.azurewebsites.net/api',
  apiAzureRepoSprint: 'https://gethomepages.azurewebsites.net/api',
  keycloak: {
    clientId: 'front-smart-campus',
    realm: 'smart-campus-iot',
    url: 'https://lemur-9.cloud-iam.com/auth',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
