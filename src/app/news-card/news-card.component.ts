import { Component, OnInit, Input } from '@angular/core';
import { NewsText } from '../sources';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() theNews!: NewsText;

  constructor() {}

  ngOnInit(): void {
  }

  returnToTheNews() {
    let menu = document.querySelector('app-menu-bar') as HTMLElement;
    menu.style.display = 'block';
    let block = document.querySelector('.news-block') as HTMLElement;
    block.style.display = 'block';
    let blockMore = document.querySelector('app-more') as HTMLElement;
    blockMore.style.display = 'block';
    let newsArticle = document.querySelector('app-news-card') as HTMLElement;
    newsArticle.style.display = 'none';

  }

}
