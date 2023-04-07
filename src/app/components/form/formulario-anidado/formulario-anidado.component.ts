import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

//Importar de Reactive Form para crear un dormulario anidado

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit{

  miFormularioAnidado: FormGroup= new FormGroup({});


  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {

    //Agrupación para teléfonos

    const telefonoFijo= this.formBuilder.group(
      {
        prefijo: '',
        numero:''
      }
    )

    const telefonoMovil= this.formBuilder.group(
      {
        prefijo: '',
        numero:''
      }
    )
    
    //Agrupacion de formulario
    this.miFormularioAnidado = this.formBuilder.group({
      telefonoFijo: telefonoFijo,
      telefonoMovil: telefonoMovil
    })
  }
}
