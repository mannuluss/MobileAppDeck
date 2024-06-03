import { Routes, RouterModule } from '@angular/router';
import { VotacionCardsComponent } from './pages/votacion-cards/votacion-cards.component';
import { NotFoundComponent } from '@core/not-found/not-found.component';
import { VotacionHomeComponent } from './pages/votacion-home/votacion-home.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
  {
    path: 'home',
    component: VotacionHomeComponent,
  },
  {
    path: 'votacion',
    component: VotacionCardsComponent,
  },
];

export const CardsGamesRoutes = RouterModule.forChild(routes);
