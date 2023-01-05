import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {

  transform(values: string[], arg: string): string[] {

    if(!arg || arg?.length < 3) return values
    
    const result = values.map((element) => {
      return element.toLowerCase().indexOf(arg.toLowerCase()) > -1 ? element : ''
    })

    return result
  }

}
