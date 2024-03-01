import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../pages/login/login.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAutenticated: boolean = false;
  displayNab: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  login(user: User): void {
    if (user.email === 'admin@gmail.com' && user.password === 'admin') {
      localStorage.setItem('user', JSON.stringify(user));
      this.displayNab.emit(true);
      this.router.navigate(['/home']);
    } else {
      this.displayNab.emit(false);
      alert('Usuário ou senha inválidos');
    }
  }

  isUserAutenticated(): boolean {
    this.userAutenticated = localStorage.getItem('user') ? true : false;
    return this.userAutenticated;
  }
}
