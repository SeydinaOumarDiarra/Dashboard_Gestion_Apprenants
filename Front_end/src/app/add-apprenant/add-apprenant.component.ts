import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { GestionServiceService } from '../gestion-service.service';
import { User } from '../User';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css']
})
export class AddApprenantComponent implements OnInit {

  user : any;
  idUser: any;
  apprenant: any;
  admin: any;
  nadd: any;
  admincontent = new Admin();
  utilisateur = new User();

  constructor(
    public service: GestionServiceService,
    public router: Router,
  ) { }

  ngOnInit(){
  }

  onRegister(form: NgForm){
    console.log(form.value);
    this.service.ajoutUser(form.value).subscribe((util: any)=>{
      this.idUser = util.id;   

      this.utilisateur.id = localStorage.getItem("idUser");
      this.utilisateur.nom = localStorage.getItem("nom");
      this.utilisateur.prenom = localStorage.getItem("prenom");
      this.utilisateur.genre = localStorage.getItem("genre");
      this.utilisateur.telephone = localStorage.getItem("telephone");
      this.utilisateur.email = localStorage.getItem("email");
      this.utilisateur.login = localStorage.getItem("username");


      this.admincontent.id = localStorage.getItem("idUser");
      this.admincontent.role = localStorage.getItem("role");
      this.admincontent.user = this.utilisateur;


      console.log(this.admincontent);
      this.apprenant = {"dateAdd" : new Date(), "dateUpdate" : new Date(), "admin": this.admincontent,  "user": util};
      this.service.ajoutApprenant(this.apprenant).subscribe((app : any)=>{
        console.log(app);
      });
      
    })
  }

}
