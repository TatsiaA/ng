import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-menu-bar-filter',
  templateUrl: './menu-bar-filter.component.html',
  styleUrls: ['./menu-bar-filter.component.scss']
})
export class MenuBarFilterComponent implements OnInit {

  filteredString: string = '';

  constructor(private services: NewsService) { }

  ngOnInit(): void {

  }

  public filterPosts(): void {
    this.services.setFilterText(this.filteredString);
  }

}
