import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  urlAPI="https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) {
    console.log('Pokedex activada!');
  }

  getPokemon(index: string){
    // let heades = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get<any>(`${this.urlAPI}${index}`);
  }
}
