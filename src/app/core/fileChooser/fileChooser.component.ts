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

  currentFiles: File | File[];

  get nameFiles(): string {
    if (this.currentFiles instanceof File) {
      return this.currentFiles.name;
    } else if (this.currentFiles instanceof FileList) {
      return Array.from(this.currentFiles)
        .map((file) => file.name)
        .join(', ');
    } else {
      return null;
    }
  }

  constructor() {}

  ngOnInit() {}

  change(event: any) {
    console.log(event);
    this.currentFiles =
      event.target.files.length == 1
        ? event.target.files[0]
        : event.target.files;

    this.files.emit(this.currentFiles);
  }

  deleteFile(){
    this.currentFiles = null;
    this.fileInput.value = null;
    this.files.emit(null);
  }
}
