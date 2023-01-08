import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
// Implementa la interfaz HttpInterceptor
export class SpinnerInterceptor implements HttpInterceptor {

  //Inyectamos el service del spinner
  constructor(private readonly spinnerSvc: SpinnerService) {}

  /* 
    HttInterceptor identifica y maneja una solicitud HTTP determinada.
    @param req: es el objeto de solicitud saliente a manejar (nuestros get, post, etc..., hacía el servidor)
    @param next: identifica el próximo interceptor en la cadena, o el backend.

    Si no hay interceptores @return genera un observable del flujo de eventos y finaliza el proceso.

    handle() es un método de la clase HttHandler que recibe la request y devuelve el observable del tipo HttpEvent 
    que a su vez es del tipo "any".
  */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerSvc.show()

    /*
      pipe permite agregar operadores (en este caso la función finalize()) al flujo de procesamiento del stream.

      Si pusieramos más operadores, se irían procesando uno tras otro, el resultado del observable pasaría al primero opreador,
      el resultado del primero saltaría al segundo, etc..

      El resultado final se retorna a los suscriptores (por lo tanto, estamos devolviendo un observable)
    */

    /*
      finalize() es un método que se invoca cuando finaliza la fuente, la función devuelve un observable que refleja la fuente, 
      a su vez llamará a un callback al terminar.
    */
    return next.handle(request).pipe(
      finalize(() => this.spinnerSvc.hide())
    );
  }
}
