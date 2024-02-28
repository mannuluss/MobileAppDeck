import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoBasicaComponent } from './info-basica.component';

const routes: Routes = [
  { path: '', component: InfoBasicaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoBasicaRoutingModule { }
