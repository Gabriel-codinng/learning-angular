import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioReactivoRoutingModule } from './formulario-reactivo-routing.module';
import { FormularioReactivoComponent } from './formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormularioReactivoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormularioReactivoRoutingModule
  ]
})

export class FormularioReactivoModule { }
