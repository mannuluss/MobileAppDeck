import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../core/loader/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.showLoader$.subscribe((value) => {
      console.log('spinner', value);
      this.isLoading = value;
    });
  }
}
