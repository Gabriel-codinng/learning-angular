import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  // El signo de "$" indica que es un observable, es una convención.
  isLoading$ = new Subject<boolean>(); 

  show():void {
    this.isLoading$.next(true);
  }

  hide():void {
    this.isLoading$.next(false);
  }
}
