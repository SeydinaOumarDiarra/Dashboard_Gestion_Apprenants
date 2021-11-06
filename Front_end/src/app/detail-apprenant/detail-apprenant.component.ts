import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apprenant } from '../Apprenant';
import { GestionServiceService } from '../gestion-service.service';
import { User } from '../User';

@Component({
  selector: 'app-detail-apprenant',
  templateUrl: './detail-apprenant.component.html',
  styleUrls: ['./detail-apprenant.component.css']
})
export class DetailApprenantComponent implements OnInit {

  id: any;
  apprenant: any;
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


}
