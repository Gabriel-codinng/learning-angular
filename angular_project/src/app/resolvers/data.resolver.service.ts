// Decordador Injectable
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const cities = ['NYC', 'Madrid', 'Barcelona', 'Sevilla']

@Injectable({ providedIn: 'root' })

// Interfaz Resolve
export class DataResolverService implements Resolve<any>{
    resolve(): Observable<any> {
        //TODO: CALL SERVICE

        // Convierte el dato del argumento y retorna un tipo observable.
        return of(cities)
    }
}