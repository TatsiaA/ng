import {Component, OnDestroy, OnInit} from '@angular/core';
import { NewsService } from '../services/news.service';
import { NewsText } from '../sources';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit, OnDestroy {

  filteredString: string = '';

  visabilityFlag: boolean = true;

  public destroyer$: Subject<void> = new Subject<void>();

  constructor(private services: NewsService) { }

  // display data
  newsDisplay: any = [];
  sources: any = [];
  theNews: NewsText = {source: { name: "name", }, title: 'title',
   description: 'description', url: '', urlToImage: '', publishedAt: ''};

  ngOnInit(): void {
    this.services.getNewsData().pipe(takeUntil(this.destroyer$)).subscribe((result) => {
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

  changeVisibilityFlag() :void {
    this.visabilityFlag = !this.visabilityFlag;
  }

  showTheArticle(el: any) {
    this.changeVisibilityFlag();
    this.theNews = el;
  }

  editCardInfo() {

  }

  deleteCard() {

  }

  ngOnDestroy() {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

}
