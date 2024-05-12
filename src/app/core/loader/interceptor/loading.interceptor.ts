import {
  HttpErrorResponse,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoaderService } from '../services/loader.service';
//import { Overlay } from '@angular/cdk/overlay';
import { Subscription, catchError, throwError, finalize } from 'rxjs';
import { ModalController } from '@ionic/angular';

/**
 * Interceptor para mostrar un loader en cada petición HTTP, segun sea necesario.
 *
 * @export
 * @class LoadingInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  //loaderService: LoaderService;
  constructor(
    private loaderService: LoaderService
  ) //private modalController: ModalController
  {
    //this.loaderService = Inject(LoaderService);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const instancia = this.loaderService; //new LoaderService(this.modalController);
    //start loader
    const spinnerShow = () =>
      (req.method === 'GET' || req.headers.get('SIMULATE-LOADER') === 'GET') &&
      req.headers.get('SIMULATE-LOADER') !== 'NONGET'
        ? instancia.spinner$.subscribe()
        : instancia.spinnerNoGet$.subscribe();

    const spinnerSubscription: Subscription = !req.headers.get('HIDE-LOADER')
      ? spinnerShow()
      : null;
    const request = req;

    return next.handle(request).pipe(
      /*catchError((err: HttpErrorResponse) => {
        return throwError(err);
      }),*/
      finalize(() => spinnerSubscription?.unsubscribe())
    );
  }
}
