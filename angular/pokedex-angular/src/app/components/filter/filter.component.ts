import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

export interface PokemonType {
  name: string;
  selected: boolean;
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  pokemonTypes: PokemonType[] = [];
  defaultValue: PokemonType = {
    name: 'Todos',
    selected: true,
  };

  @Output() selectedType: EventEmitter<PokemonType> = new EventEmitter();

  constructor(private pokemonsService: PokemonsService) {}

  listPokemonsType(): void {
    this.pokemonsService.listPokemonsType().subscribe((resp) => {
      resp.results.forEach((type: any) => {
        this.pokemonTypes.push({
          name: type.name,
          selected: false,
        });
      });
    });
  }

  onSelected(type: PokemonType): void {
    this.clearFilters();
    type.selected = true;
    this.selectedType.emit(type);
  }

  clearFilters(): void {
    this.pokemonTypes.forEach((type) => {
      type.selected = false;
    });
  }

  ngOnInit() {
    this.listPokemonsType();
    this.pokemonTypes.push(this.defaultValue);
  }
}
