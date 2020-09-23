import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css']
})
export class IntroduccionComponent implements OnInit {


  titulo: string;

  constructor() {
    this.titulo = "Introduccion";
  }

  ngOnInit(): void {
  }

}
