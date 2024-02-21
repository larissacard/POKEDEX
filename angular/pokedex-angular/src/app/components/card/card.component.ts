import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/pages/home/home.component';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pokemon!: Pokemon;
  pokemonInfo: any = {};
  pokeTypes: string[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  getPoke(poke: Pokemon) {
    this.pokemonsService.getPokemon(poke.url).subscribe((resp) => {
      this.pokemonInfo = resp;
      console.log(resp.types);
      this.pokeTypes = resp.types.map((type: any) => type.type.name);
    });
  }

  ngOnInit() {
    this.getPoke(this.pokemon);
  }
}
