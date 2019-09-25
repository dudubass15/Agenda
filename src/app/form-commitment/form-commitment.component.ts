import { Component, OnInit } from '@angular/core';
import { TesteService } from '../services/http/teste.service';

@Component({
  selector: 'app-form-commitment',
  templateUrl: './form-commitment.component.html',
  styleUrls: ['./form-commitment.component.css']
})
export class FormCommitmentComponent implements OnInit {

  constructor(private testeService: TesteService) { }

  ngOnInit() {
    this.testeService.buscarNome();
  }

}
