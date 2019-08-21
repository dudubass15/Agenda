import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-info-app',
  templateUrl: './info-app.component.html',
  styleUrls: ['./info-app.component.css']
})
export class InfoAppComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private modal: ModalService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.modal.abrirModal.subscribe(
      function(content: any) {
        console.log('Recebeu o evento do modal');
        alert('Deu certo!');
        // this.open(event);
      }
    );
  }

  teste() {
    console.log('ok');
    alert('Deu certo!');
  }

  open(content) {
    console.log('ok');
    this.modalService.open(content);
  }

}
