import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votacion-home',
  templateUrl: './votacion-home.component.html',
  styleUrls: ['./votacion-home.component.scss']
})
export class VotacionHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
}
