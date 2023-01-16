import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  urlApi="https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) {
    console.log('Pokedex activada');
   }
}
