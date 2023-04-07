import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';



@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    //Exportamos aquellas clases, componentes, pipes etc que queramos compartir con quien importe este módulo.
    ListaBasicaComponent    
  ]
})
export class ListsModule { }
