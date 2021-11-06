import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { GestionServiceService } from '../gestion-service.service';

@Component({
  selector: 'app-liste-presence',
  templateUrl: './liste-presence.component.html',
  styleUrls: ['./liste-presence.component.css']
})
export class ListePresenceComponent implements OnInit {
liste: any;
admincontent = new Admin();
id: any;
  constructor(
    public service: GestionServiceService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  addListe_presence(){

    this.admincontent.id = localStorage.getItem("idUser");
    this.admincontent.role = localStorage.getItem("role");
    this.liste = {"date_liste": new Date(), "admin": this.admincontent};
    this.service.ajoutListe_presence(this.liste).subscribe((data: any) =>{
      this.id  = data.id;
    this.router.navigate(['detailListe_presence', this.id]);
    })
  }

}
