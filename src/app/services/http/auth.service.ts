import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  localStorage: any;

  constructor(private http: HttpClient, private router: Router) { }

  fazerLogin(dados) {
    return this.http.post(environment.webserviceURL + 'user/login', dados).toPromise().then( r => {
      if(r['login'] === true) {

        sessionStorage.setItem('user', <any>true);
        this.userAutenticado();
        this.router.navigate(['home']);

      }else {

        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);

      }
    });
  }

  userAutenticado() {
    this.localStorage = sessionStorage.getItem('user');
    this.usuarioAutenticado = this.localStorage;
    this.mostrarMenuEmitter.emit(this.usuarioAutenticado);
    return this.usuarioAutenticado;
  }

  userLogout() {
    sessionStorage.clear();
    this.mostrarMenuEmitter.emit(false);
  }
}
