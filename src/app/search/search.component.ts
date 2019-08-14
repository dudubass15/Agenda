import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formulario = new FormGroup({
    texto: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formulario.value);
  }

}
