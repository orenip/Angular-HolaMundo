import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit{

  miFormularioValidado: FormGroup= new FormGroup({});

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {

    this.miFormularioValidado=this.formBuilder.group({
     
      nombre: ['', Validators.required], //Campo obligatorio
      apellidos: '',
      //Campo obligatorio con valores minimos y máximos
      edad: ['',Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      //Campo obligatorio y tipo email
      email: ['',Validators.compose([Validators.required, Validators.email])],
      //Campo obligatorio y con expresion regular
      password:['',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      //Campo boleano con true como Obligatorio
      acepta: [false, Validators.requiredTrue]

    })

  }

  get nombre(){
    return this.miFormularioValidado.get('nombre')
  }
  get apellidos(){
    return this.miFormularioValidado.get('apellidos')
  }
  get edad(){
    return this.miFormularioValidado.get('edad')
  }
  get email(){
    return this.miFormularioValidado.get('email')
  }
  get password(){
    return this.miFormularioValidado.get('password')
  }
  get acepta(){
    return this.miFormularioValidado.get('acepta')
  }

  //Método de Submit del formulario
  enviarFormulario(){
    //Controlar que formulario sea válido

    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado.value);
      //resetear los campo del formulario
      this.miFormularioValidado.reset();
      
    }
  }
}
