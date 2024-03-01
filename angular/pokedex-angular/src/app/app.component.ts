import { Component } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokedex-angular';
  constructor(private authService: AuthService) {}
}
