import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './services/github-api.service';

@Component({
  selector: 'app-github-applications-updater',
  templateUrl: './github-applications-updater.component.html',
  styleUrls: ['./github-applications-updater.component.scss'],
})
export class GithubApplicationsUpdaterComponent implements OnInit {
  listApps: any[] = [
    {
      name: 'Yuzu EA',
      version: '1.0.0',
      description:
        'La primera version de yuzu, actualmente es descontinuado por culpa de Nintendo.',
      url: 'pineappleEA/pineapple-src',
      img: '/assets/imgs/yuzu-ea-icon.png',
    },
    {
      name: 'Suyu',
      version: '1.0.0',
      description: 'Description App 2',
      url: 'suyu-emu/suyu/releases',
    },
  ];

  listAppFiltered = [...this.listApps];

  constructor(private githuApiService: GithubApiService) {}

  ngOnInit() {}

  search(event) {
    const query = event.target.value.toLowerCase();
    this.listAppFiltered = this.listApps.filter((app) => app.name.includes(query));

  }
}
