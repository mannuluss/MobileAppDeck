import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertMessageService {
  constructor(private toastController: ToastController) {}

  /**
   * Muestra un mensaje en pantalla de tipo Toast, con la duración de 5 segundos.
   * @note Un toast es un mensaje sin interacción para el usuario.
   * @param msj Mensaje a mostrar
   * @param type Tipo de mensaje: 'success' | 'danger' | 'warning'
   * @param icon Icono a mostrar, por defecto se utiliza un icono según el tipo de mensaje.
   * @param position
   * @returns
   */
  async presentToast(
    msj,
    type: 'success' | 'danger' | 'warning' = 'success',
    icon?: string,
    position: 'top' | 'middle' | 'bottom' = 'top'
  ): Promise<void> {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000,
      position: position,
      icon: icon ? icon :
        (type === 'success' ? 'star' : type === 'danger' ? 'skull' : 'warning'),
      cssClass: `toast-${type}`,
      color:
        type === 'success'
          ? 'success'
          : type === 'danger'
          ? 'danger'
          : 'warning',
    });

    return toast.present();
  }
}
