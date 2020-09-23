import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  pipePersonalizado: string;
  dato1: string;
  vector: number[];
  PI: number;
  porcentaje: number;
  salario: number;
  persona: any;
  fecha: Date;
  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("Termino la ejecucion - estoy listo");
    }, 3000);
  });
  constructor() {
    this.pipePersonalizado = "Dinosaurio en America";
    this.dato1 = "Instituto";
    this.vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.PI = Math.PI;
    this.porcentaje = 0.789;
    this.salario = 1212.90;
    this.persona = {
      nombre: 'Diego',
      apellido: 'Guaman',
      edad: '27',
      direccion: {
        calle: 'Armando Arias',
        numero: 1234
      }
    }
    this.fecha = new Date();
  }
  ngOnInit(): void {

  }

}
