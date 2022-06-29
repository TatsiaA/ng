import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IDataSources} from "../sources";
// import { Http, Response } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from "rxjs";
// import { environment } from './../../environments/environment';
// // import 'rxjs/add/operator/map';
// import { map } from 'rxjs';
// import 'rxjs/add/observable/throw';
// // import { map } from "rxjs/operators";
// // import 'rxjs/add/operator/map';;
// import { catchError } from 'rxjs/operators';


// const url = 'https://newsapi.org/v2/';
@Injectable({providedIn: 'root'})

export class NewsService {

  private filtredText: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public filtredText$: Observable<string | null> = this.filtredText.asObservable();

  API_KEY = 'bf586602dfe64074a323e2b95fe2fe06';
  private newsApiUrl = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${this.API_KEY}`;

  constructor(private http: HttpClient) {
  }

  getNewsData(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  setFilterText(data: string): void  {
    this.filtredText.next(data);
  }

}
