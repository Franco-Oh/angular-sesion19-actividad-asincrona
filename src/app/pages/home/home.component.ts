import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Variables para pokemones
  data:any[] = [];
  pokemons = [];
  shiny = false;

  // Variables para buscador
  control = new FormControl;
  filtro_value = '';


  constructor(private pokedex:PokedexService, private pokeImagen: ElementRef) { }

  ngOnInit(): void {
    this.getPokemons();
    // this.pokeBuscarAutomatico(); //Activar si se quiere buscar de manera automatica/responsive
  }

  // Funcion para mostrar datos de 151 pokemones
  getPokemons(){
    let pokemonData;
    for(let i = 1; i < 152; i++){
      this.pokedex.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            image2: res.sprites.front_shiny,
            name: res.name
          }
          this.data.push(pokemonData)
        },
        err => { }
      )
    }  
  }

  // Funcion para buscar el pokemon haciendo clic en el boton buscar
  pokeBuscar(){
    this.filtro_value = this.control.value;
  }

  // Funcion para buscar el pokemon un segundo despues de haber escrito
  pokeBuscarAutomatico(){
    this.control.valueChanges.pipe(debounceTime(1000)).subscribe( res => {
      console.log(res);
      this.filtro_value = res;      
    } )
  }

}
