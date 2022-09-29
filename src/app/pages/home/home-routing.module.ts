import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DecksComponent } from './decks/decks.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: 'app',
    pathMatch: 'prefix',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent
      },{
        path: 'decks',
        pathMatch: 'full',
        component: DecksComponent
      },{
        path: 'cards',
        pathMatch: 'full',
        component: CardsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
