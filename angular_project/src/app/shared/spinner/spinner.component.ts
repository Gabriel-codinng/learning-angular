import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})

//Inyectamos el service
export class SpinnerComponent {
  isLoading$ = this.spinnerSvc.isLoading$
  constructor(private readonly spinnerSvc: SpinnerService) {}
}
