import {Component, Input, OnChanges, SimpleChanges, OnInit, Output, EventEmitter} from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-menu-bar-select',
  templateUrl: './menu-bar-select.component.html',
  styleUrls: ['./menu-bar-select.component.scss']
})
export class MenuBarSelectComponent implements OnInit, OnChanges {

  @Input() selectedSource: string = '';
  @Output() newSource: EventEmitter<string> = new EventEmitter<string>();

  sources: any = [];
  sourcesObj: any = {};

  constructor(private services: NewsService) { }

  ngOnInit(): void {
    this.services.initSources().subscribe((result) => {
      this.sourcesObj = result;
      let sourceArr = this.sourcesObj.sources;
      sourceArr.forEach((source: any) => {
        this.sources.push(source.name);
      })
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName of Object.keys(changes)) {

      const change = changes[propName];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);

      console.log(propName + ' changed from ' + from + ' to ' + to);
    }

  }

  getValue(value: string) {
    console.log(value);
    this.newSource.emit(value);
  }

}
