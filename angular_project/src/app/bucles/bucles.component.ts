import { Component } from '@angular/core';
import { Persona } from '../contador/persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas: Persona[] = [
    {nombre:'Ainhoa', edad: 19},
    {nombre:'Gabriel', edad: 25},
    {nombre:'Jorge', edad: 32},
    {nombre:'Paco', edad: 69},
  ]
}
