import { Location } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { AuthKeycloakService } from '@core/auth/services/AuthKeycloakLocal.service';
import { LoaderService } from '@core/loader/services/loader.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private platform: Platform,
    private router: Router,
    private zone: NgZone,
    private authService: AuthKeycloakService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.listenToAppUrlOpen();
    });
  }

  /**
   * Listen to the appUrlOpen event to handle deep links.
   */
  listenToAppUrlOpen() {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const domain = 'mobile.feliperojas.live';
        const path = event.url.split(domain).pop();

        if (path) {
          console.log('path', path);
          this.router.navigateByUrl(path);
        }
      });
    });
  }

  ngOnInit(): void {
    this.loaderService.showLoader$.subscribe((value) => {
      console.log('spinner', value);
      this.isLoading = value;
    });

    this.authService.init();
    this.authService.isLogin().subscribe((isLogin) => {
      if (isLogin) {
        this.authService.profile().subscribe((data) => {
          console.log('KEYCLOAK profile', data);
          this.continue();
        });
      }
    });
  }

  continue() {
    this.router.navigate(['/card-games/votacion']);
  }
}
