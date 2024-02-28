// import { Overlay, OverlayRef } from '@angular/cdk/overlay';
// import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, NEVER } from 'rxjs';
import { delay, finalize, share } from 'rxjs/operators';
//import { SpinnerComponent } from '../components/spinner/spinner.component';
import { BloqueadorComponent } from '../components/bloqueador/bloqueador.component';
import { ModalController } from '@ionic/angular';

/**
 * Servicio para mostrar loaders en Ionic.
 *
 * @export
 * @class LoaderService
 */
@Injectable()
export class LoaderService {
  /**
   * Background color del bloqueador loader.
   */
  backgroundColor: string = `rgba(255, 255, 255, 0.8)`;

  /**
   * Observable que se muestra para peticiones GET
   */
  public readonly spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      })
    );
  }).pipe(share());
  /**
   * Observable que se muestra para peticiones NO GET
   */
  public readonly spinnerNoGet$ = defer(() => {
    this.showNoGet();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      })
    );
  }).pipe(share());

  public readonly showLoader$ = new BehaviorSubject<boolean>(false);

  private overlay$: BehaviorSubject<HTMLIonModalElement> = new BehaviorSubject(null);

  private get overlayRef(): HTMLIonModalElement {
    return this.overlay$.value;
  }
  //private overlayRef: HTMLIonModalElement;

  /**
   * @ignore
   */
  constructor(private modalController: ModalController) {}

  /**
   * Muestra un loader GET
   */
  public show(): void {
    Promise.resolve(null).then(() => {
      this.showLoader$.next(true);
      // this.overlayRef = this.overlay.create({
      //   minWidth: 100,
      //   positionStrategy: this.overlay.position().global(),
      //   hasBackdrop: false,
      // });
      // this.overlayRef.attach(new ComponentPortal(SpinnerComponent));
    });
  }
  /**
   * Muestra un loader NO GET
   */
  public showNoGet(): void {
    // Hack avoiding `ExpressionChangedAfterItHasBeenCheckedError` error
    Promise.resolve(null).then(async () => {
      console.log('showNoGet');
      this.overlay$.next(
        await this.modalController.create({
          id: 'bloqueador',
          component: BloqueadorComponent,
          componentProps: {
            backgroundColor: this.backgroundColor,
          },
          backdropDismiss: false,
        })
      );
      this.overlayRef.present();
    });
  }
  /**
   * Oculta el loader actual
   */
  public hide(): void {
    console.log('hide', this.overlayRef);
    this.overlayRef?.dismiss().then(() => {
      this.overlay$.next(null);
    });
    this.showLoader$.next(false);
  }
}
