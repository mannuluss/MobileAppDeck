import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsGamesRoutes } from './cards-games.routing';
import { VotacionCardsComponent } from './pages/votacion-cards/votacion-cards.component';
import { IonicModule } from '@ionic/angular';
import { TarjetaGamesComponent } from './components/tarjeta-games/tarjeta-games.component';
import { VotacionHomeComponent } from './pages/votacion-home/votacion-home.component';

@NgModule({
  declarations: [
    VotacionCardsComponent,
    VotacionHomeComponent,
    TarjetaGamesComponent,
  ],
  imports: [CommonModule, CardsGamesRoutes, IonicModule],
})
export class CardsGamesModule {}
