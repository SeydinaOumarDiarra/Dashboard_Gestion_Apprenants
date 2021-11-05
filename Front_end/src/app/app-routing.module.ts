import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { AdminComponent } from './admin/admin.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { ListePresenceComponent } from './liste-presence/liste-presence.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'apprenants', component: ApprenantsComponent, },
  { path: 'admins', component: AdminComponent, },
  { path: 'profil', component: ProfilComponent },
  { path: 'addApprenant', component: AddApprenantComponent },
  { path: 'listes_presence', component: ListePresenceComponent },
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
