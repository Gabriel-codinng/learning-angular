import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface PersonaForm {
  "nombre": string,
  "edad": string,
  "checkWork": boolean,
  "ciudad": string,
  "opinion": string
}

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component {

  persona: PersonaForm = {
    "nombre": '',
    "edad": '',
    "checkWork": false,
    "ciudad": '',
    "opinion": '',  
  }

  onSubmit(form: NgForm): void {
    // alert('Form values ' + JSON.stringify (values))
    console.log(form)

  }
}
