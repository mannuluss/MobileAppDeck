import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Player } from '../../models/players.interface';
import { Tarjetas } from '../../models/tarjetas.interface';
import { CardSprintService } from '../../services/card-sprint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votacion-cards',
  templateUrl: './votacion-cards.component.html',
  styleUrls: ['./votacion-cards.component.scss'],
})
export class VotacionCardsComponent implements OnInit {
  listPlayers: Player[];

  /**
   * clave: Id de la persona
   * valor: id de la tarjeta
   */
  listVotos: Map<number, number> = new Map<number, number>();

  listTarjetas: Tarjetas[] = [
    /*{
      id: 14,
      nombre: 'Ninja',
      pathFile: '',
    },
    {
      id: 10,
      nombre: 'Monje audaz',
      pathFile: '',
    },
    {
      id: 12,
      nombre: 'Super bowl',
      pathFile: '',
    },*/
  ];

  idCurrentTarjeta: number = null;

  get idCurrentPlayer(): number {
    if (this.listPlayers === null || this.listPlayers.length === 0) {
      return null;
    }
    return this.listPlayers[this.orderAvatar].id;
  }

  orderAvatar: number = 0;

  //estilos
  marginCaruselCards: number = 71;

  @ViewChild('caruselCards', { static: true })
  caruselCards: ElementRef<HTMLDivElement>;

  constructor(
    private sprintService: CardSprintService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sprintService.getConfig().subscribe((data) => {
      this.listPlayers = data.personas;
      this.listTarjetas = data.tarjetas;
    });

    /*this.caruselCards.nativeElement.addEventListener(
      'scrollend',
      (event: Event) => {
        let widthParent = this.caruselCards.nativeElement.clientWidth;
        //se obtiene al primer hijo
        let list = this.caruselCards.nativeElement.children.item(0);
        //el tamaño del carusel de items sobre la cantidad de items
        //teniendo en cuenta que todos son del mismo tamaño
        let widthItem = list.clientWidth / list.childElementCount;
        //el margin que debe tener el hijo (el que se mueve) para que funcione todo
        this.marginCaruselCards = (widthParent - widthItem) / 2;

        let scrollWidth = this.caruselCards.nativeElement.scrollWidth;
        let scrollLeft = this.caruselCards.nativeElement.scrollLeft;
        //console.log(scrollWidth);
        console.log('scroleft', scrollLeft);

        console.log('widthItem', widthItem);
        //console.log(this.caruselCards.nativeElement.);
        console.log('widthParent', widthParent, list.clientWidth);

        //tamaño de la zona del scroll - margin - el tamaño del item y luego divido en 2
        let desplazamiento = (scrollWidth - this.marginCaruselCards * 2 - widthItem) / 2;
        let cantDesp = Math.round(scrollLeft / widthItem);
        console.log('cantDesp', cantDesp);
        // console.log('desp', desplazamiento);
        this.caruselCards.nativeElement.scrollTo(
          { left: desplazamiento * cantDesp, behavior: 'instant' }
          //list.children.item(0))
        );
      }
    );*/
  }

  /**
   * Si la tarjeta ya fue seleccionada por otro jugador y no es la tarjeta actual del jugador se deshabilita.
   */
  disableTarjeta(idTarjeta: number): boolean {
    return (
      Array.from(this.listVotos.values()).some(
        (value) => value === idTarjeta
      ) && this.idCurrentTarjeta !== idTarjeta
    );
  }

  seleccionarVoto(idTarjeta) {
    this.idCurrentTarjeta = idTarjeta;
    this.listVotos.set(this.listPlayers[this.orderAvatar].id, idTarjeta);
  }

  next() {
    this.orderAvatar++;
    this.idCurrentTarjeta = this.listVotos.get(
      this.listPlayers[this.orderAvatar].id
    );
  }

  back() {
    this.orderAvatar--;
    this.idCurrentTarjeta = this.listVotos.get(
      this.listPlayers[this.orderAvatar].id
    );
  }

  enviar() {
    //TODO: enviar la informacion al servidor
    console.log(this.listVotos);
    let votos = Array.from(this.listVotos.entries()).map((value) => {
      return { idPersonaVota: value[0], idTarjeta: value[1] };
    });
    this.sprintService.saveVotacion(votos).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/card-game/home']);
    });
  }
}
