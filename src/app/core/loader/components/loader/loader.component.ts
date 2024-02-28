import { Component, OnInit } from '@angular/core';
import { IonHeader, IonProgressBar } from "@ionic/angular/standalone";
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  showSpinner: boolean = true;

  constructor(private LoaderService: LoaderService) { }

  ngOnInit() {
    this.LoaderService.spinner$.subscribe((value) => {
      console.log('spinner', value);
      this.showSpinner = value;
    });
  }

}
