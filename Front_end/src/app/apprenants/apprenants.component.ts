import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionServiceService } from '../gestion-service.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit {
listeApp : any;
  constructor(
    public service: GestionServiceService,
    public router: Router,
  ) { 
   
  }

  ngOnInit() {
    this.listeapprenants();
  }

  async listeapprenants() {
    this.service.listeApprenant().subscribe((res:any)=>{
      this.listeApp = res;
      console.log(this.listeApp);
      this.router.navigate(['apprenants']);
    });
    
}

}
