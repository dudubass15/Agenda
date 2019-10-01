import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CompromissosService } from '../services/http/compromissos.service';

@Component({
  selector: 'app-form-commitment',
  templateUrl: './form-commitment.component.html',
  styleUrls: ['./form-commitment.component.css']
})
export class FormCommitmentComponent implements OnInit {

  form = new FormGroup({
    titulo: new FormControl(''),
    dataInicio: new FormControl(''),
    dataFim: new FormControl(''),
    local: new FormControl(''),
    descricao: new FormControl(''),
    horaInicio: new FormControl(''),
    horaFim: new FormControl('')
  });

  constructor(private compromissoService: CompromissosService, private router: Router) { }

  ngOnInit() {
  }

  sendForm() {

    let dados = {
      titulo: this.form.controls.titulo.value,
      dataInicio: this.form.controls.dataInicio.value,
      dataFim: this.form.controls.dataFim.value,
      local: this.form.controls.local.value,
      descricao: this.form.controls.descricao.value,
      horaInicio: this.form.controls.horaInicio.value,
      horaFim: this.form.controls.horaFim.value,
    };

    this.compromissoService.adicionarCompromisso(dados).then( e => {
      this.router.navigate(['home']);
    });
    
  }

}
