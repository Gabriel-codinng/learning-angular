import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormOutputComponent {

  @Output() newCityEvent = new EventEmitter<string>();
  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() updateCityEvent = new EventEmitter<City>();
  @Input() selection !: City

  onAddnewCity(city: string): void{
    console.log('Item ->', city)
    this.newCityEvent.emit(city)
  }

  onCitySelected(city: City): void {
    this.citySelectedEvent.emit(city)
  }

  onUpdateCity(item: City, change: string): void {

    const city: City = {
      _id: item._id,
      name: change
    }

    this.updateCityEvent.emit(city)
  }

  // counterRender(): boolean{
  //   console.log('Render Form')
  //   return true
  // }
}
