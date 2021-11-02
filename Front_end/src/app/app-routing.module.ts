import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { ListePresenceComponent } from './liste-presence/liste-presence.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'apprenants', component: ApprenantsComponent, },
  { path: 'profil', component: ProfilComponent },
  { path: 'listes_presence', component: ListePresenceComponent },
  // { path: 'signin', component: SigninComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
