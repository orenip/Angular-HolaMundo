import { Component, OnInit } from '@angular/core';

// Creamos un tipo de base para el ejemplo
export type Producto={
  nombre: string;
  precio:number;
  description: string;
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit{

  listaElementos: Producto[]=[
    {
      nombre:'Leche',
      precio: 10,
      description: 'Leche entera',
    },
    {
      nombre:'Carne',
      precio: 20,
      description: 'Carne de Cerdo',
    },
    {
      nombre:'Verdura',
      precio: 5,
      description: 'Calabaza',
    },
    {
      nombre:'Huevos',
      precio: 15,
      description: 'Talla XL',
    } ];
  cargando: boolean=true;

  opcion: number= 0;
  constructor(){

  }

  ngOnInit(): void {
    
  }

  cambiarCargando(){
    this.cargando=!this.cargando;
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion= opcionEscogida; //El valor cambia, implica un cambio en los elementos renderizados
  }

}
