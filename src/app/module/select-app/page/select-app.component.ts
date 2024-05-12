import { Component, OnInit } from '@angular/core';
//import * as Docker from 'dockerode';

@Component({
  selector: 'app-select-app',
  templateUrl: './select-app.component.html',
  styleUrls: ['./select-app.component.scss']
})
export class SelectAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var docker5 = new Docker({
    //   host: 'localhost',
    //   port: 2375,
    //   //ca: fs.readFileSync('ca.pem'),
    //   //cert: fs.readFileSync('cert.pem'),
    //   //key: fs.readFileSync('key.pem'),
    //   //version: 'v1.25' // required when Docker >= v1.13, https://docs.docker.com/engine/api/version-history/
    // });
  }

}
