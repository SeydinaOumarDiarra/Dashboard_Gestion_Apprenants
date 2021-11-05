import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionServiceService } from '../gestion-service.service';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css']
})
export class AddApprenantComponent implements OnInit {

  user : any;
  idUser: any;
  apprenant: any;

  constructor(
    public service: GestionServiceService,
    public router: Router,
  ) { }

  ngOnInit(){
  }

  onRegister(form: NgForm){
    console.log(form.value);
    //this.user = {"nom" : form.value["nom"], "prenom" :form.value["prenom"], "email" :form.value["email"], "telephone" :form.value["tel"], "genre": form.value["genre"]};
    //console.log(this.user);
    this.service.ajoutUser(form.value).subscribe((util: any)=>{
      this.idUser = util.id;
      console.log(util);
      this.apprenant = {"dateAdd" : new Date(), "dateUpdate" : new Date()};
      this.service.ajoutApprenant(this.apprenant).subscribe((app : any)=>{
        console.log(app);
      });
      
    })
  }

}
