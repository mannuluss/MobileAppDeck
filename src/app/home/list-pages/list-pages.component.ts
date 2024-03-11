import { Component, OnInit } from '@angular/core';
import { PagesService } from './services/pages.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pages',
  templateUrl: './list-pages.component.html',
  styleUrls: ['./list-pages.component.scss']
})
export class ListPagesComponent implements OnInit {
  pages$: Observable<any>;

  constructor(private pageService: PagesService ) { }

  ngOnInit() {
    this.pages$ = this.pageService.getAllPages()
  }

}
