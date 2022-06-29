import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {

  filteredString: string = '';

  constructor(private services: NewsService) { }

  // display data
  newsDisplay: any = [];

  ngOnInit(): void {
    this.services.getNewsData().subscribe((result) => {
      this.newsDisplay = result.articles;
    })
    this.services.filtredText$.subscribe((filter) => {
      if (filter) {
        this.filteredString = filter;
      } else {
        this.filteredString = '';
      }
    })
  }

  showTheArticle() {

  }

  editCardInfo() {

  }

  deleteCard() {

  }

}
