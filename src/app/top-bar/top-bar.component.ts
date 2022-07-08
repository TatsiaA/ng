import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {

  private subs: Subscription | null = null;

  inputLoginValue = (document.getElementById('user-login') as HTMLInputElement).value;



  constructor(
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    // this.subs = this.loginService.username$.subscribe((username) => this.log(username));

  }

  ngOnDestroy(): void {
    // this.subs?.unsubscribe();
  }

  logOut(): void {
    (document.querySelector('.username') as HTMLSpanElement).textContent = '';
    this.inputLoginValue = '';
    (document.querySelector('.log-out') as HTMLButtonElement).textContent = 'Log In';
  }

}
