import { Component, OnInit } from '@angular/core';
import { sources } from '../sources';

@Component({
  selector: 'app-menu-bar-select',
  templateUrl: './menu-bar-select.component.html',
  styleUrls: ['./menu-bar-select.component.scss']
})
export class MenuBarSelectComponent implements OnInit {

  selectedSource: number | undefined;

  sources = sources;


  constructor() { }

  ngOnInit(): void {
  }

}
