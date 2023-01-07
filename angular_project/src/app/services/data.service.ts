import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface City {
  _id:string;
  name:string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private readonly API = 'https://crudcrud.com/api/0d7bad28f5304503b4cfc4a865054479/cities'

  constructor(private readonly http: HttpClient) { }

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
