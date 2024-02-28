import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from 'src/app/pages/home/home.component';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {
  @Input() pokemon!: Pokemon;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();
  pokemonDetails!: any;

  constructor(private pokemonsService: PokemonsService) {}

  togglerModal(): void {
    this.closeModal.emit(false);
  }

  getPokemonDetails(name: string): void {
    this.pokemonsService.getPokemon(name).subscribe((data) => {
      this.pokemonDetails = data;
      console.log(this.pokemonDetails);
    });
  }

  ngOnInit(): void {
    console.log(this.pokemon);
    this.getPokemonDetails(this.pokemon.name);
  }
}
