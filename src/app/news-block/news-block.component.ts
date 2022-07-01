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
  sources: any = [];

  ngOnInit(): void {
    this.services.getNewsData().subscribe((result) => {
      this.newsDisplay = result.articles;
      this.newsDisplay.forEach((post: any) =>
        this.sources.push(post.source.name));
      this.sources = [...new Set(this.sources)]
      console.log(this.sources);
    })
    this.services.filtredText$.subscribe((filter) => {
      if (filter) {
        this.filteredString = filter;
      } else {
        this.filteredString = '';
      }
    })
  }

  showTheArticle(el: any) {

    console.log(el.title);
  }

  editCardInfo() {

  }

  deleteCard() {
    // (this.parentNode).parentNode.remove();
  }

}
