import { Component } from '@angular/core';

//Interfaces
import { Persona } from './persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
  nombre:string = "Gabriel Correia"
  value:number = 0

  persona:Persona = {
    nombre: "Gabriel",
    edad: 22
  }

  // Métodos
  decrementar() {
    this.value--
  }

  incrementar(){
    this.value++
  }
}
