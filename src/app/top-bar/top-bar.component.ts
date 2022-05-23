import { Component, OnInit } from '@angular/core';

import { sources } from '../sources';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  sources = sources;

  constructor() { }

  ngOnInit(): void {
  }

}
