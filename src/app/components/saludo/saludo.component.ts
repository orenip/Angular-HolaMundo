import { Component, OnInit , Input , Output, EventEmitter ,OnChanges,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnChanges,OnDestroy{

  @Input() nombre: string= "Anónimo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter <string>();

  myStyle: object ={
    color:'blue',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  constructor(){} 
  
  ngOnInit(): void{
    // Instrucciones previas a la renderizacion del componente
    console.log("ngOnInite del componente salido")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CAMBIO: Valor Anterior", changes['nombre'].previousValue);
    console.log("CAMBIO: Valor Nuevo", changes['nombre'].currentValue);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy El componente va a desaparecer")
  }

  /*
  *Ejemplo para gestionar un evento de tipo click en el DOM
  
  alertaSaludo(): void{
    alert(`Hola, ${this.nombre} Alerta despachada desde un click de botón`)
  }
  */

  /*
  *Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
  */
  enviarMensajeAlPadre(): void{
    this.mensajeEmitter.emit(`Hola, ${this.nombre} Alerta despachada desde un click de botón`);
  }

}

//ORDEN CICLO DE VIDA DE LOS COMPONENTES
//* 1. ngOnChanges
//* 2. ngOnInit
//  3. ngAfterContentInit
//  4. ngAfterContentChecked
//  5. ngAfterViewInit
//  6. ngAfterViewChecked
//  7. ngAfterContentChecked
//  8. ngAfterviewChecked
//* 9. ngOnDestroy