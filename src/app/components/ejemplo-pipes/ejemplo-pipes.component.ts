import { Component } from '@angular/core';
import { IJugador } from 'src/app/models/jugador.interface';
import { IContacto } from 'src/app/models/contacto.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent {

  dob: Date= new Date(1992,5,4);
  cambio:boolean=true;
  nombre: string='Jose';
  numero_PI: number = 3.1415926535897;
  precioCarrito: number=100;
  persona: IContacto ={
    id: 0,
    nombre: 'Jose A',
    apellidos: 'Lopin',
    edad: 30,
    email: ' lopin@loypi.com'
  }
  cantidad: number=0.3512;
  textoLargo: string='Hola yo soy un texto muy pero muy largo'

  //Ejemplo para Pipe Calcular Puntuación
  jugador1: IJugador={
    nombre: 'Jose',
    puntos: [10, 30, 40, 0]
  }
  jugador2: IJugador={
    nombre: 'Pepe',
    puntos: [0, 80, 10, 5]
  }


get dateFormat(){
  return this.cambio ? 'shortDate' : 'fullDate'
}

  cambiarFormato(){
    this.cambio= !this.cambio;
  }



}
