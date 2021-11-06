import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  detailApprenant(id: any){
    return this.http.get(this.url + `/detailApprenant/${id}`);
  }

  detailUser(id: any){
    return this.http.get(this.url + `/detailUser/${id}`);
  }

  updateApprenant(id: any, app: any){
    return this.http.put(this.url + `/updateApprenant/${id}`, app);
  }

  updateUser(id: any, user: any): Observable<Object>{
    return this.http.put(this.url + `/updateUser/${id}`, user);
  }

  deleteApprenant(id: any): Observable<Object>{
    return this.http.delete(this.url + `/deleteApprenant/${id}`);
  }

  deleteUser(idUser: any): Observable<Object>{
    return this.http.delete(this.url + `/deleteUser/${idUser}`);
  }

  ajoutListe_presence(liste: any){
    return this.http.post(this.url + '/addListe_presence', liste);
  }

  detailListePresence(id: any){
    return this.http.get(this.url + `/detailListe_presence/${id}`);
  }
}
