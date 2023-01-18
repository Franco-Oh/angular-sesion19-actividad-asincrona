import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //Base de datos
  pokeInfo:any=[];

  //Para seleccionar el numero de detalle
  detalles!:any;

  constructor(private rutaActiva:ActivatedRoute, private pokedex:PokedexService) { }

  ngOnInit(): void {
    this.detalles = this.rutaActiva.snapshot.params['id']; //para obtener los parametros de detalles
    console.log(this.detalles);
    this.pokedex.getPokemon(this.detalles).subscribe( pokedex => this.pokeInfo = pokedex) //base de datos
  }

}
