import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private httpClient: HttpClient) {}

  listPokemons(): Observable<any> {
    const url = '/pokemon';
    return this.httpClient.get(this.baseUrl + url);
  }

  getPokemon(url: string): Observable<any> {
    const urlApi = url;
    return this.httpClient.get(urlApi);
  }

  listPokemonsType(): Observable<any> {
    const url = `/type`;
    return this.httpClient.get(this.baseUrl + url);
  }

  listPokemonsByType(type: string): Observable<any> {
    const urlApi = `/type/${type}`;
    return this.httpClient.get(this.baseUrl + urlApi);
  }
}
