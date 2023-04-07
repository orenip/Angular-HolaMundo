import { Injectable } from '@angular/core';

//importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

//Importamos Observables de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]>{
    //return CONTACTOS; // Nos devuelve un listado de contactos si no lleva Promise delante
    return Promise.resolve(CONTACTOS);

  }

  //obtenerContactoPorId(id: number): Promise<IContacto>| undefined {
    obtenerContactoPorId(id: number): Observable<IContacto>| undefined {

    //Buscamos el contacto por ID dentro de la lista de CONTACTOS mockeados
    const contacto= CONTACTOS.find((contacto: IContacto)=> contacto.id===id);

    //Creamos un Observable
    let observable: Observable<IContacto>= new Observable(observer=>{
      observer.next(contacto); // Emitir un valor a todo componente suscrito
      observer.complete(); //No emitimos más valores
    })

    if(contacto){
      //return contacto;
      //return Promise.resolve(contacto);
      return observable;
    }else{
      return;
    }
  }

   
}
