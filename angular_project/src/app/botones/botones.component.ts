import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {
    class:string = "";
    button_disabled:boolean = false;

    deshabilitar(){
      this.button_disabled = !this.button_disabled
    }
}
