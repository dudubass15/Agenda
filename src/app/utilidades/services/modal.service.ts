import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  abrirModal = new EventEmitter();

  constructor() {
  }

  recebeEventModal(event) {
    this.abrirModal.emit(event);
  }
}
