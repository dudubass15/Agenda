import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openFullScreen() {
    let i = document.documentElement;
    let t = window.document;

    if (!i.requestFullscreen()) {
      i.requestFullscreen();
    } else {
      t.exitFullscreen();
    }
  }


}
