import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  username: string = '0';

  constructor(
    private readonly loginService: LoginService
  ) { }

  public setUsername(): void {
    this.loginService.changeUsername(this.username);
  }
}
