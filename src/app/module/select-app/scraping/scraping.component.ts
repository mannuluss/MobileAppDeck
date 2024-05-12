import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApexOptions } from 'apexcharts';
import { catchError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss'],
})
export class ScrapingComponent implements OnInit {
  dataJson: string = '{}';

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  changeFile(files: File | File[]) {
    console.log(files);
    if (!(files instanceof File)) {
      return;
    }
    const formData = new FormData();
    formData.append('file', files, files.name);

    this.http
      .post<any>(environment.apiScrapingUrl + '/scrapper/rut', formData)
      .pipe(
        catchError((error) => {
          this.presentToast('top', error);
          this.dataJson = '{}';
          return error;
        })
      )
      .subscribe((response) => {
        // Handle successful response
        this.dataJson = response;
      });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msj) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 5000,
      position: position,
    });

    toast.present();
  }
}
