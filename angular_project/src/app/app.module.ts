/**
 * 
 *  Este archivo define un Módulo que agrupa las herramientas para definir los distintos componentes de la aplicación
 * 
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';

//Este módulo también deshabilita el envio de formularios.
import { FormsModule } from '@angular/forms';
import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
import { DecoradorOutputComponent } from './decorador-output/decorador-output.component';
import { FormOutputComponent } from './form-output/form-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    DecoradorInputComponent,
    DecoradorOutputComponent,
    FormOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
