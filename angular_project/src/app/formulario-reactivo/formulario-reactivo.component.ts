import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface PersonaForm {
  "nombre": string,
  "edad": string,
  "checkWork": boolean,
  "ciudad": string,
  "opinion": string
}

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  persona!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.persona = this.initForm();
    // this.onPathValue()
    // this.onSetValue()
  }

  onPathValue():void {
    // El método patchValue nos permite escoger determinadas propiedades y pasarles unos valores.
    this.persona.patchValue({
      name: 'Hola'
    })
  }

  onSetValue():void {
    // El método setValue nos permite settear todas las propiedades.
    this.persona.setValue({
      opinion: 'Hola mundo'
    })
  }

  onSubmit(): void {
    console.log('Form ->', this.persona.value)
  }

  initForm(): FormGroup { 
    // Aquí declaramos las propiedades que tendrá el formulario con FormBuilder.
    // Y sus distintas validaciones.
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      checkWork: ['', [Validators.required]],
      city: ['', [Validators.required]],
      opinion: ['', [Validators.maxLength(300)]]
    })
  }
}
