import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompromissosService } from 'src/app/services/http/compromissos.service';

@Component({
  selector: 'app-visualizar-card',
  templateUrl: './visualizar-card.component.html',
  styleUrls: ['./visualizar-card.component.css']
})
export class VisualizarCardComponent implements OnInit {

  id;
  registros: any;
  @Input() idCompromisso;

  constructor(private route: ActivatedRoute, private compromissoService: CompromissosService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params;
    this.getCompromisso(this.id);
  }

  getCompromisso(params) {
    let dados = {
      id: parseInt(params.id)
    }
    this.compromissoService.buscarCompromisso(dados).then( c => {
      this.registros = c['registros']
    });
  }

  arquivaCompromisso(id) {
    this.compromissoService.arquivarCompromisso(id).finally( () => {
      this.router.navigate(['home']);
    })
  }

}
