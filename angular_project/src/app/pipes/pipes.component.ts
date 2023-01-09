import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

// implements AfterViewInit
export class PipesComponent {
  @ViewChild(NgModel) filterInput!: NgModel

  /*

    valueChanges genera un observable que retorna cada nuevo valor que se agrega en el input.

  */

  // ngAfterViewInit(): void {
  //   this.filterInput.valueChanges?.subscribe(res => {
  //     this.filter(res)
  //   })
  // }

  // filter(query:string): void{
  //   console.log('query', query)
  // }

  name : string = 'gabriel correia ferrera';
  date : string = '6/15/15, 9:03 AM' ;
  criteria !: string

  nombres : Array<string> = ['Gabriel', 'Ainhoa', 'Javier']
}
