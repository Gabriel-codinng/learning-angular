import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface City {
  _id:string;
  name:string;
}

const initCity: City = {
  _id: '',
  name: '',
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // Una diferencia sustancial entre Subject y BehaviorSubject es que al Behavior siempre hay que pasarle un valor por defecto
  private city$ = new BehaviorSubject<City>(initCity);

  private readonly API = 'https://crudcrud.com/api/448bb1e1d3854d19ad65af3859deb4a9/cities'

  constructor(private readonly http: HttpClient) { }

  // Getter
  get selectedCity$():Observable<City> {
    return this.city$.asObservable()
  }

  setCity(city: City): void {
    this.city$.next(city)
  }

  // POST
  addNewCity(city: string): Observable<City>{
    const body = {name: city}
    return this.http.post<City>(this.API, body)
  }

  //GET
  getCities(): Observable<City[]>{
    return this.http.get<City[]>(this.API)
  }

  //PUT
  updateCity(city: City):Observable<void>{
    const body = {name: city.name}
    return this.http.put<void>(`${this.API}/${city._id}`, body)
  }

  //DELETE
  deleteCity(id: string):Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
