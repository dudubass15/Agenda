import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../utilidades/services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  teste: any;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.teste = {
      nome: 'Carlos Eduardo',
      sobrenome: 'Oliveira'
    };
  }

  openModal() {
    // this.startModal.emit({ console: this.teste });
    this.modalService.recebeEventModal(event);
  }

}
