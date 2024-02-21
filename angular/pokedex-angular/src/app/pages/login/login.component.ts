import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userLogin: User = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  OnSingUp() {
    console.log('clickou');
    this.authService.login(this.userLogin);
  }
}
