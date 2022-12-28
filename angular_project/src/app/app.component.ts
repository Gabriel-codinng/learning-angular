import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * No es obligatorio crear documentos HTML y CSS para definir la esctructura ni el estilo del componente
 */

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>Proyecto de Angular</h1>
//   `,
//   styles: [`
//     h1{
//       font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//       color: red
//     }
//   `]
// })

export class AppComponent {
  title = 'angular_project';
}
