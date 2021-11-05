import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
profil: any;
login: any;
nom: any;
prenom: any;
genre: any;
tel: any;
email: any;
  constructor() { }

  ngOnInit(){
    this.profil = localStorage.getItem("user");
    //console.log(this.profil);

    this.login = localStorage.getItem("username");
    this.nom = localStorage.getItem("nom");
    this.prenom = localStorage.getItem("prenom");
    this. genre = localStorage.getItem("genre");
     this.tel = localStorage.getItem("telephone");
     this.email = localStorage.getItem("email");
  }

}
