import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

// const url = 'https://newsapi.org/v2/';
@Injectable({providedIn: 'root'})

export class NewsService {

  private filtredText: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public filtredText$: Observable<string | null> = this.filtredText.asObservable();

  API_KEY = 'bf586602dfe64074a323e2b95fe2fe06';
  private newsApiUrl = `https://newsapi.org/v2/top-headlines?country=gb&pageSize=10&apiKey=${this.API_KEY}`;

  constructor(private http: HttpClient) {
  }

  getNewsData(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  setFilterText(data: string): void  {
    this.filtredText.next(data);
  }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.API_KEY);
 }
 initArticles(){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.API_KEY);
 }
 getArticlesByID(source: String){
  return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.API_KEY);
 }

}
