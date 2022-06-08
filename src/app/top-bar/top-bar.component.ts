import { Component, Input } from '@angular/core';

import { sources } from '../sources';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  sources = sources;

  constructor() { }

  @Input() userName: string = "";


}
