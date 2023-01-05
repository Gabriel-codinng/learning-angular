import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent {
  name : string = 'gabriel correia ferrera';
  date : string = '6/15/15, 9:03 AM' ;
  criteria !: string

  nombres : Array<string> = ['Gabriel', 'Ainhoa', 'Javier']
}
