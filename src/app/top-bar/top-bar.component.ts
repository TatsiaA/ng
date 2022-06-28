import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';

import { sources } from '../sources';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {

  private subs: Subscription | null = null;

  username: string = '0';

  sources = sources;

  constructor(
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.subs = this.loginService.username$.subscribe((username) => this.log(username));
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  private log(data: string): void {
    document.querySelector('.username')?.insertAdjacentText('afterbegin', data);
    console.log(data);
  }




}
