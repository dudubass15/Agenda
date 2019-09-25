import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompromissosService {

  constructor(private http: HttpClient) { }

  getCompromissos() {
    return this.http.get(environment.webserviceURL + 'compromissos/').toPromise();
  }
}
