import { Component } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
export interface Pokemon {
  name: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pokemons: Pokemon[] = [];
  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.listPokemons().subscribe((resp) => {
      this.pokemons = resp.results;
    });
  }
}
