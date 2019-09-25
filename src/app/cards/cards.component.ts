import { Component, OnInit } from '@angular/core';
import { CompromissosService } from '../services/http/compromissos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  listaCompromissos: any;

  constructor(private compromissoService: CompromissosService) { }

  ngOnInit() {
    this.compromissoService.getCompromissos().then(c => {
      console.log(c)
    });
  }

}
