import { Location } from '@angular/common';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { PokemonType } from 'src/app/components/filter/filter.component';
import { PokemonsService } from 'src/app/services/pokemons.service';
export interface Pokemon {
  name: string;
  url: string;
}

interface ServiceController<T = any> {
  data: any[];
  service: T;
  method: keyof T;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pokemons: Pokemon[] = [];
  typeFilter!: PokemonType;
  pokemonName: string = '';
  limit: number = 12;

  constructor(
    private pokemonsService: PokemonsService,
    private location: Location
  ) {}

  listPokemons(): void {
    this.pokemons = [];
    this.pokemonsService.listPokemons(this.limit).subscribe((resp) => {
      this.pokemons = resp.results;
    });
  }

  listPokemonsByType(type: string): void {
    this.pokemons = [];
    this.pokemonsService.listPokemonsByType(type).subscribe((resp) => {
      resp.pokemon.slice(0, 12).forEach((pokemon: any) => {
        this.pokemons.push(pokemon.pokemon);
      });
    });
  }

  select(event: PokemonType): void {
    if (event && event.name !== 'Todos') {
      this.typeFilter = event;
      this.listPokemonsByType(this.typeFilter.name);
    } else {
      this.typeFilter = { name: 'Todos', selected: true };
      this.listPokemons();
    }
  }

  ngOnInit() {
    if (this.typeFilter && this.typeFilter.name !== 'Todos') {
      this.listPokemonsByType(this.typeFilter.name);
      this.location.replaceState('/home');
    } else {
      this.listPokemons();
    }
  }
}
