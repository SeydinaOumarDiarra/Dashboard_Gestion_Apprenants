import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apprenant } from '../Apprenant';
import { ApprenantsComponent } from '../apprenants/apprenants.component';
import { GestionServiceService } from '../gestion-service.service';
import { User } from '../User';

@Component({
  selector: 'app-update-apprenant',
  templateUrl: './update-apprenant.component.html',
  styleUrls: ['./update-apprenant.component.css']
})
export class UpdateApprenantComponent implements OnInit {

  id: any;
  apprenant: any;
  user: any;
  constructor(
    public service: GestionServiceService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailApprenant(this.id).subscribe(data =>{
      this.apprenant = data;      
    })
  }

  onUpdate(){
    this.service.updateUser(this.apprenant.user.id, this.apprenant.user).subscribe(data1=>{
      this.apprenant.dateUpdate = new Date();
      this.service.updateApprenant(this.id, this.apprenant).subscribe((data: any)=>{
        console.log("apprenant Modifié : "+data);
        this.router.navigate(['apprenants']);
      }, error => console.error(error));
    })
  }

}
