import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecoradorOutputComponent {
  cities: Array<string> = ['NYC', 'Madrid', 'Barcelona'] 

  addNewCity(city: string): void{
    this.cities.push(city);
  }

  counterRender(): boolean{
    console.log('Render Cities')
    return true
  }
}
