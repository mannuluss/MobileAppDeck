export const environment = {
  production: true,
  apiUrl: 'http://amacom.eastus2.cloudapp.azure.com/api',
  apiScrapingUrl: 'http://feliperojas.live/pythonscraping/api',
  apiAzureRepository: 'https://gethomepages.azurewebsites.net/api',
  apiAzureRepoSprint: 'https://gethomepages.azurewebsites.net/api',
  //Configuracion para keycloack
  keycloak: {
    clientId: 'front-smart-campus',
    realm: 'smart-campus-iot',
    url: 'https://lemur-9.cloud-iam.com/auth',
  },
};
