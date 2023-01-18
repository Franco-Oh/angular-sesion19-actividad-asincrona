import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: any): any[] {
    console.log(lista);
    console.log(texto);

    if(!texto){
      return lista
    } else {
      return lista.filter(user => user.name.includes(texto));
    }
  }

}
