import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-decorador-input',
  templateUrl: './decorador-input.component.html',
  styleUrls: ['./decorador-input.component.css']
})
export class DecoradorInputComponent implements OnChanges, OnInit, OnDestroy {
  @Input() color!: string;
  @Input() text!: string;

  ngOnChanges(changes: SimpleChanges){
    console.log('Changes ->', changes)
  }

  ngOnInit(): void {
   console.log('OnInit') 
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')
  }
}
