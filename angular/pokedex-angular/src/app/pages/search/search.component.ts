import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../home/home.component';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  listPokemons(): void {
    this.pokemonsService.listPokemons().subscribe((resp) => {
      this.pokemons = resp.results;
    });
  }

  searchPokemon(value: string): void {
    const filter = this.pokemons.filter((pokemon) => {
      return pokemon.name.includes(value.toLocaleLowerCase());
    });

    if (value.trim()) {
      this.filteredPokemons = filter;
    } else {
      this.filteredPokemons = [];
    }
  }

  ngOnInit() {
    this.listPokemons();
  }
}
