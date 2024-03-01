import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  pokemons: any[] = [];

  ngOnInit(): void {
    this.pokemons = localStorage.getItem('pokemons')
      ? JSON.parse(localStorage.getItem('pokemons') || '[]')
      : [];
  }
}
