import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecoradorOutputComponent implements OnInit {
  cities: City[] = []
  selection: City = {_id:"", name: ""} 
  // Inyección del service
  constructor(private readonly dataSVc: DataService) { }

  ngOnInit(): void {
    this.dataSVc.getCities().subscribe(cities => {
      this.cities = [...cities]
      console.log(this.cities)
    })
  }

  addNewCity(city: string): void {
    //this.cities.push(city);
    this.dataSVc.addNewCity(city).subscribe( res => {
      this.cities.push(res)
    })
}

onSelectedCity(city: City): void {
  this.selection = city;
}

onCityDelete(id: string):void{
  if(confirm('¿Estas seguro de eliminar la ciudad?')){
    this.dataSVc.deleteCity(id).subscribe(()=> {
      const tempArr = this.cities.filter(city => city._id !== id)
      this.cities = [...tempArr]
      this.onClear()
    })
  }
}

updateCity(city: City): void {
  this.dataSVc.updateCity(city).subscribe(() => {
    const tempArr = this.cities.filter(item => item._id !== city._id)
    this.cities = [...tempArr, city]
    this.onClear()
  })
}

onClear():void{
  this.selection = {
    _id : '',
    name: ''
  }
}

  // counterRender(): boolean{
  //   console.log('Render Cities')
  //   return true
  // }

}
