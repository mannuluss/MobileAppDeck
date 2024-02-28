import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fileChooser',
  templateUrl: './fileChooser.component.html',
  styleUrls: ['./fileChooser.component.scss'],
  standalone: true,
})
export class FileChooserComponent implements OnInit {
  @ViewChild('fileInput') fileInput: HTMLInputElement;

  constructor() {}

  ngOnInit() {}

}
