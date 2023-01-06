import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private readonly router: Router) {}

  goToReactive(): void{
    this.router.navigate(['formulario-reactivo'], {queryParams: {name: 'Gabriel'}})
  }

  goToId(): void{
    //El segundo parametro se pasará como parte de la ruta
    this.router.navigate(['query-id', '580'])
  }
}
