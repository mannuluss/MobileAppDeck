import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Signal,
  input,
} from '@angular/core';
import { Tarjetas } from '../../models/tarjetas.interface';

@Component({
  selector: 'app-tarjeta-games',
  templateUrl: './tarjeta-games.component.html',
  styleUrls: ['./tarjeta-games.component.scss'],
})
export class TarjetaGamesComponent implements OnInit {
  item: Signal<Tarjetas> = input<Tarjetas>();

  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}
}
