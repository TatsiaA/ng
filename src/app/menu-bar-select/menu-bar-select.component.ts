import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-bar-select',
  templateUrl: './menu-bar-select.component.html',
  styleUrls: ['./menu-bar-select.component.scss']
})
export class MenuBarSelectComponent /*implements OnInit*/ {

  selectedSource: number | undefined;

  sources = [
    { id: 1, name: 'lenta.ru' },
    { id: 2, name: 'habrahabr.ru' },
    { id: 3, name: 'other' },
  ];

  // constructor() { }
  //
  // ngOnInit(): void {
  // }

}
