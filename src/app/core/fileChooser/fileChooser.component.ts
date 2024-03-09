import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-fileChooser',
  templateUrl: './fileChooser.component.html',
  styleUrls: ['./fileChooser.component.scss'],
})
export class FileChooserComponent implements OnInit {
  @ViewChild('fileInput') fileInput: HTMLInputElement;

  @Output() files: EventEmitter<File | File[]> = new EventEmitter<
    File | File[]
  >();

  constructor() {}

  ngOnInit() {}

  change(event: any) {
    console.log(event);
    let currentfiles =
      event.target.files.length == 1
        ? event.target.files[0]
        : event.target.files;

    this.files.emit(currentfiles);
  }
}
