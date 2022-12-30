import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component {
  
  persona = {
    nombre: '',
    edad: ''
  }

  submit(){
    alert(JSON.stringify(this.persona))
  }
}
