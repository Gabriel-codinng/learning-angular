import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  // el ? permite inicializar una variable sin valor
  dia?: number;
  
  change(dato:any){
    this.dia = parseInt(dato);
  }
}
