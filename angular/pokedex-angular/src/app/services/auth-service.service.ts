import { Injectable } from '@angular/core';
import { User } from '../pages/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAutenticated: boolean = false;

  constructor(private router: Router) {}

  login(user: User): void {
    if (user.email === 'admin@gmail.com' && user.password === 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

  isUserAutenticated(): boolean {
    if (localStorage.getItem('user') !== null) {
      this.userAutenticated = true;
    } else {
      this.userAutenticated = false;
    }
    return this.userAutenticated;
  }
}
