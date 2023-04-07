import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Modulos Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';

//Locale para PIPES
import {registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es';
registerLocaleData(localeES); //registramos el LOCALE_ID de 'es' para su uso en Pipes

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

//Modulo personalizado que importa componentes de tipo Lists
import { ListsModule } from './modules/lists/lists.module';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/form/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/form/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/form/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/form/formulario-validado/formulario-validado.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos nuestro módulo personalizado
    ListsModule,
    //Importamos el módulo HttpClientModule para hacer peticiones HTTP
    HttpClientModule,
    //Importamos  Reactive FormsModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    //Importamos los modulos de Angulas Material y usamos en los formularios
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    //Registramos el Locale de ESpara qie los PIPES salgan en Español
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
