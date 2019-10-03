import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-button-card-arquivar',
  templateUrl: './button-card-arquivar.component.html',
  styleUrls: ['./button-card-arquivar.component.css']
})
export class ButtonCardArquivarComponent implements OnInit {

  id: any;
  @Output() eventoArquivar = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

  eventClick() {
    if(this.id) {
      this.eventoArquivar.emit(this.id);
    }
  }

}
