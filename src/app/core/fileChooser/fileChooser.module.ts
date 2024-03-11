import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileChooserComponent } from './fileChooser.component';
import { IonIcon } from '@ionic/angular/standalone';

@NgModule({
  imports: [
    CommonModule,
    IonIcon
  ],
  declarations: [FileChooserComponent],
  exports: [FileChooserComponent]
})
export class FileChooserModule { }
