import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const url = 'https://newsapi.org/v2/';
@Injectable({providedIn: 'root'})

export class NewsService {
  constructor(private http: HttpClient) {
  }
  // getNewsData(): Observable<IArtworksState> {
  //   return this.http.get<IResponseData>(url)
  //     .pipe(
  //       // map((data) => transformResData(data)),
  //     );
  // }
  getNewsData(): Observable<any> {
    return this.http.get('');
  }
}
