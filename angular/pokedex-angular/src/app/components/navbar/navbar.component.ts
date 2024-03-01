import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  showNav: boolean = false;
  favoritesCont: number = 0;

  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  showMenu(): void {
    this.authService.displayNab.subscribe((resp) => {
      this.showNav = resp;
    });
  }

  getFavoritesPokemons(): void {
    this.favoritesCont = localStorage.getItem('pokemons')
      ? JSON.parse(localStorage.getItem('pokemons') || '[]').length
      : 0;
  }

  ngOnInit(): void {
    this.showMenu();
    this.getFavoritesPokemons();
  }
}
