import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionServiceService } from '../gestion-service.service';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit {
listeApp : any;
id: any;
apprenant: any;
  constructor(
    public service: GestionServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { 
   
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];  
    this.listeapprenants();
  }

  async listeapprenants() {
    this.service.listeApprenant().subscribe((res:any)=>{
      this.listeApp = res;
      console.log(this.listeApp);
      this.router.navigate(['apprenants']);
    });
    
}

deleteApp(id: any){

  this.id = id;
  this.service.detailApprenant(this.id).subscribe(data =>{
    this.apprenant = data;
    console.log(this.apprenant.user.id);
    this.service.deleteApprenant(this.apprenant.id).subscribe(data => {
      this.service.deleteUser(this.apprenant.user.id);
      this.router.navigate(['apprenants']);
    })
   
    
     
  })

}

}
