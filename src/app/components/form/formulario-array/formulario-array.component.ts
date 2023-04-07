import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit{

  miFormularioArray: FormGroup= new FormGroup({});



  constructor(private FormBuilder: FormBuilder){

  }

  ngOnInit(): void {

    this.miFormularioArray=this.FormBuilder.group({
      nombre: '',
      apellidos:'',
      telefonos: this.FormBuilder.array([]) //Inicializamos la lista de telefonos vacía

    })

    }
    //Metodo getter para obtener el FormArray de la lista de teléfonos
      get telefonosFormulario(): FormArray{
        return this.miFormularioArray.get('telefonos')as FormArray
    }

    //Metodo para añadir Telefonos a la lista
    anadirTelefono(){

      //Creamos un grupo telefono
      const telefonoNuevo=this.FormBuilder.group({
        prefijo: '',
        numero: '',
      })

      //Añadimos el grupo a la lista de telefonos
      this.telefonosFormulario.push(telefonoNuevo);
      
    }

    //Metodo para eliminar telefonos de la lista
    eliminarTelefono(index: number){
        this.telefonosFormulario.removeAt(index)
    }


  
}
