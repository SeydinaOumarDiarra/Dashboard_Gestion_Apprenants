import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionServiceService {

  private url = environment.BASE_URL;
  constructor(
    private http: HttpClient,
  ) { }

  connexion(login: String, password: String){
    return this.http.get(this.url + '/connexion/' + login + '/' + password);
  }

  listeApprenant(){
    return this.http.get(this.url + '/listApprenant');
  }

  listeAdmin(){
    return this.http.get(this.url + '/listAdmin');
  }

  ajoutUser(app: any){
    return this.http.post(this.url + '/addUser', app);
  }

  ajoutApprenant(app: any){
    return this.http.post(this.url + '/addApprenant', app);
  }
}
