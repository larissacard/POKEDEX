import { Component } from '@angular/core';
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

  constructor(private authService: AuthService) {}

  OnSingUp() {
    this.authService.login(this.userLogin);
  }
}
