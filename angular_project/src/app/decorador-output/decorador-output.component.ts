import { Component } from '@angular/core';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.css']
})
export class DecoradorOutputComponent {
  cities: Array<string> = ['NYC', 'Madrid', 'Barcelona'] 

  addNewCity(city: string): void{
    this.cities.push(city);
  }
}
