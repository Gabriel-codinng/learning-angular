import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormOutputComponent implements AfterViewInit{

  @Output() newCityEvent = new EventEmitter<string>();
  @Output() updateCityEvent = new EventEmitter<City>();
  @Input() selection !: City

  /* 
    Referenciamos a la referencia del input

    ElementRef es un la envoltura de un elemento nativo dentro de una Vista.
  */

  @ViewChild('newCity') newCity!: ElementRef;

  // onAddnewCity(city: string): void{
  //   console.log('Item ->', city)
  //   this.newCityEvent.emit(city)
  // }

  ngAfterViewInit(): void {
    this.newCity.nativeElement.value = this.selection.name
    console.log('Input ->', this.newCity)
  }

  onAddnewCity(): void{
    // nativeElemenetRef es una propiedad de la clase ElementRef
    this.newCityEvent.emit(this.newCity.nativeElement.value)
    this.onClear()
  }

  onUpdateCity(): void {
    const city: City = {
      _id: this.selection._id,
      name: this.newCity.nativeElement.value
    }

    this.updateCityEvent.emit(city)
    this.onClear()
  }

  // counterRender(): boolean{
  //   console.log('Render Form')
  //   return true
  // }

  private onClear(): void{
    this.newCity.nativeElement.value =  ''
  }
}
