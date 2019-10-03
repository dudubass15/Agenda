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

  adicionarCompromisso(dados) {
    return this.http.post(environment.webserviceURL + 'compromissos/addCompromisso', dados).toPromise();
  }

  buscarCompromisso(dados) {
    return this.http.post(environment.webserviceURL + 'compromissos/getCompromisso', dados).toPromise();
  }

  arquivarCompromisso(dados) {
    return this.http.post(environment.webserviceURL + 'compromissos/arquivaCompromisso', dados).toPromise();
  }
}
