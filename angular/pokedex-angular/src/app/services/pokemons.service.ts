import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private httpClient: HttpClient) {}

  listPokemons(): Observable<any> {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=12';
    return this.httpClient.get(url);
  }

  getPokemon(url: string): Observable<any> {
    const urlApi = url;
    return this.httpClient.get(urlApi);
  }
}
