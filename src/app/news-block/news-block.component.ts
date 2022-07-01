import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsText } from '../sources';

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
  theNews: NewsText = {source: { name: "name", }, title: 'title',
   description: 'description', url: '', urlToImage: '', publishedAt: ''};

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
    let menu = document.querySelector('app-menu-bar') as HTMLElement;
    menu.style.display = 'none';
    let block = document.querySelector('.news-block') as HTMLElement;
    block.style.display = 'none';
    let blockMore = document.querySelector('app-more') as HTMLElement;
    blockMore.style.display = 'none';
    this.theNews = el;
    let newsArticle = document.querySelector('app-news-card') as HTMLElement;
    newsArticle.style.display = 'block';
  }

  editCardInfo() {

  }

  deleteCard() {
    // (this.parentNode).parentNode.remove();
  }

}
