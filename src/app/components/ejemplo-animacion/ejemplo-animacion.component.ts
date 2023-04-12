import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],
  //Metadatos para animación del componente
  animations:[
    trigger('animaciones',[
      state('active',style({
        transform:  'translate(10px, 20px'
      })),
      state('inactive',style({
        transform:  'translate(40px, 50px'
      })),
      state('sube', style({
        transform:  'translateY(10px)'
      })),
      state('baja', style({
        transform:  'translateY(-10px)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionComponent implements OnInit {

  state:string= 'inactive';

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(()=>{
      if(this.state=='active'){
        this.state='inactive';
      }else{
        this.state='active';
      };
    }, 1000);

  }

  subir(){
    this.state= 'subir';
  }

  bajar(){
    this.state= 'subir';
  }


}
