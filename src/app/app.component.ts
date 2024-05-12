import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@core/loader/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.showLoader$.subscribe((value) => {
      console.log('spinner', value);
      this.isLoading = value;
    });
  }
}
