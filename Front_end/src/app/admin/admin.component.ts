import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionServiceService } from '../gestion-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  listeApp: any;
  
  constructor(
    public service: GestionServiceService,
    public router: Router,
  ) { }

  ngOnInit(){
    this.listeadmins();
  }

  async listeadmins() {
    this.service.listeAdmin().subscribe((res:any)=>{
      this.listeApp = res;
      console.log(this.listeApp);
      this.router.navigate(['admins']);
    });
    
}

}
