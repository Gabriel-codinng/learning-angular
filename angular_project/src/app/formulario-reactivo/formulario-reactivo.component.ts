import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
  
  //QueryParams
  name!: string
  
  //Resolvers
  cities: string[] = []

  constructor(
    private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    //Resolvers
    this.cities = this.route.snapshot.data['cities']

    // Un observable nos permite recopilar los cambios de su condición a lo largo del tiempo, a diferencia de las promesas pueden cambiar infinitas veces su valor.
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name']
      } 
    )


    this.persona = this.initForm();
    // this.onPathValue()
    // this.onSetValue()
  }

  onPathValue():void {
    // El método patchValue nos permite escoger determinadas propiedades y pasarles unos valores.
    this.persona.patchValue({
      name: this.name
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
