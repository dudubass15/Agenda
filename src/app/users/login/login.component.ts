import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/http/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuarioObj: Usuario;

  form = new FormGroup({
    usuario: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.usuarioObj = new Usuario();
    this.usuarioObj.usuario = this.form.controls.usuario.value;
    this.usuarioObj.senha = this.form.controls.senha.value;

    this.authService.fazerLogin(this.usuarioObj);
  }

}
