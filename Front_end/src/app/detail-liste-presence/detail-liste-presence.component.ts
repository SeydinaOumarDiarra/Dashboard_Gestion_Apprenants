import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionServiceService } from '../gestion-service.service';

@Component({
  selector: 'app-detail-liste-presence',
  templateUrl: './detail-liste-presence.component.html',
  styleUrls: ['./detail-liste-presence.component.css']
})
export class DetailListePresenceComponent implements OnInit {
  id: any;
  liste: any;
  listeApp: any;
  constructor(
    public service: GestionServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
     this.service.detailListePresence(this.id).subscribe(data =>{
       this.liste = data;
     });

    this.listeapprenants();
  }


  async listeapprenants() {
    this.service.listeApprenant().subscribe((res:any)=>{
      this.listeApp = res;
      console.log(this.listeApp);
     // this.router.navigate(['apprenants']);
    });
  }

  addListe(form: NgForm){
    console.log("========= "+form.value.apprenant);
  }
}
