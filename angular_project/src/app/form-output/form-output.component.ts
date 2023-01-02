import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css']
})

export class FormOutputComponent {

  @Output() newCityEvent = new EventEmitter<string>();

  onAddnewCity(city: string): void{
    console.log('Item ->', city)
    this.newCityEvent.emit(city)
  }
}
