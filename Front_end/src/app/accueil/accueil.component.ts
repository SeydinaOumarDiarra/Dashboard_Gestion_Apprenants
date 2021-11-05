import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  user: any;
  constructor() { 
    this.user = localStorage.getItem("username");
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
