import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { ResetComponent } from './reset/reset.component';
import { ListePresenceComponent } from './liste-presence/liste-presence.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AddApprenantComponent } from './add-apprenant/add-apprenant.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    ApprenantsComponent,
    AccueilComponent,
    ProfilComponent,
    ResetComponent,
    ListePresenceComponent,
    LoginComponent,
    AdminComponent,
    AddApprenantComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
