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

  constructor(private pokemonsService: PokemonsService) {}

  getPoke(poke: Pokemon): void {
    this.pokemonsService.getPokemon(poke.name).subscribe((resp) => {
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

  ngOnInit(): void {
    this.getPoke(this.pokemon);
  }
}
