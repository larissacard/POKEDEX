import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pages/home/home.component';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  pokemonInfo: any = {};
  pokeTypes: string[] = [];
  showModal: boolean = false;
  isFavorite: boolean = false;

  constructor(private pokemonsService: PokemonsService) {}

  getPoke(pokemon: Pokemon): void {
    this.pokemonsService.getPokemon(pokemon.name).subscribe((resp) => {
      this.pokemonInfo = resp;
      console.log(this.pokemonInfo);
      this.pokeTypes = resp.types.map((type: any) => type.type.name);
    });
  }

  onOpenModal(): void {
    this.showModal = true;
  }

  onCloseModal(): void {
    this.showModal = false;
  }

  favoritePokemon(pokemon: Pokemon): void {
    this.isFavorite = !this.isFavorite;
    const existingFavorites = JSON.parse(
      localStorage.getItem('pokemons') || '[]'
    );
    if (this.isFavorite) {
      existingFavorites.push(pokemon);
      localStorage.setItem('pokemons', JSON.stringify(existingFavorites));
    } else {
      const updatedFavorites = existingFavorites.filter(
        (favPokemon: Pokemon) => favPokemon.name !== pokemon.name
      );
      localStorage.setItem('pokemons', JSON.stringify(updatedFavorites));
    }
    console.log(JSON.parse(localStorage.getItem('pokemons') || '[]'));
  }

  checkIfPokemonIsFavorited(): void {
    const existingFavorites = JSON.parse(
      localStorage.getItem('pokemons') || '[]'
    );
    this.isFavorite = existingFavorites.some(
      (favPokemon: Pokemon) => favPokemon.name === this.pokemon.name
    );
  }

  ngOnInit(): void {
    this.getPoke(this.pokemon);
    this.checkIfPokemonIsFavorited();
  }
}
