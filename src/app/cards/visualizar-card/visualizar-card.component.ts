import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompromissosService } from 'src/app/services/http/compromissos.service';

@Component({
  selector: 'app-visualizar-card',
  templateUrl: './visualizar-card.component.html',
  styleUrls: ['./visualizar-card.component.css']
})
export class VisualizarCardComponent implements OnInit {

  id;
  registros: any;

  constructor(private route: ActivatedRoute, private compromissoService: CompromissosService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params;
    this.getCompromisso(this.id);
  }

  getCompromisso(params) {
    let dados = {
      id: params
    }
    this.compromissoService.buscarCompromisso(dados).then( c => {
      this.registros = c,
      console.log(this.registros);
    });
  }

}
