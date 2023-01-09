import { JsonPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('contactForm') contactForm!: NgForm
  persona: PersonaForm = {
    "nombre": '',
    "edad": '',
    "checkWork": false,
    "ciudad": '',
    "opinion": '',  
  }

  onSubmit(): void {
    // alert('Form values ' + JSON.stringify (values))
    console.log('Form values template-driven', this.contactForm.value)
  }
}
