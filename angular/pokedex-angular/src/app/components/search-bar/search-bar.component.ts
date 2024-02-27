import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() searchPokemon = new EventEmitter<string>();

  search(value: string): void {
    this.searchPokemon.emit(value);
  }
}
