import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApexOptions } from 'apexcharts';
import { catchError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AlertMessageService } from '@core/alert-message/alert-message.service';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.scss'],
})
export class ScrapingComponent implements OnInit {
  dataJson: string = '{}';

  constructor(
    private http: HttpClient,
    private alertService: AlertMessageService
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
      .subscribe({
        next: (response) => {
          this.alertService.presentToast('Archivo leido correctamente.', 'success');
          // Handle successful response
          this.dataJson = response;
        },
        error: (error) => {
          // Handle error
          console.error('erroro', error);
          this.dataJson = '{}';
          this.alertService.presentToast(error, 'danger');
        },
      });
  }
}
