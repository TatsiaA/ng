import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  selectedItemValue: any;

  constructor() { }

  ngOnInit(): void {
    let selectedItem = document.getElementById("select") as HTMLSelectElement;
    if (selectedItem) {
      this.selectedItemValue = selectedItem.value;
    }
  }

  public getNewSelect(data: string): void {
    console.log('new test source: ', data)
  }

}
