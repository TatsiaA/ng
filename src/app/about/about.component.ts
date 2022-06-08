import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor() { }

  visibility1: boolean = true;
  toggle1(){
      this.visibility1=!this.visibility1;
  }

  visibility2: boolean = true;
  toggle2(){
      this.visibility2=!this.visibility2;
  }

}
