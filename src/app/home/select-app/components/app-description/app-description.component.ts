import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-applications-updater/services/github-api.service';
import * as Github from 'github-api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-description',
  templateUrl: './app-description.component.html',
  styleUrls: ['./app-description.component.scss'],
})
export class AppDescriptionComponent implements OnInit {
  realeases: Github.Release[];

  constructor(
    private githuApiService: GithubApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.githuApiService.getRealeaseApp(params.repo).subscribe((val) => {
        console.log(val);
        this.realeases = val;
      });
    });
  }
}
