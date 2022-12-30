import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { BetsComponent } from './bets/bets.component';
import { EventsComponent } from './events/events.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'superbets/home',
    pathMatch: 'full'
  },
  {
    path: 'superbets/home',
    component: HomeComponent
  },
  {
    path: 'superbets/register',
    component: RegisterComponent
  },
  {
    path: 'superbets/login',
    component: LoginComponent
  },
  {
    path: 'superbets/players',
    component: PlayersComponent
  },
  {
    path: 'superbets/bets',
    component: BetsComponent
  },
  {
    path: 'superbets/events',
    component: EventsComponent
  },
  {
    path: 'superbets/transction_history',
    component: TransactionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
