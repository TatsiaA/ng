import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
    public username$ = new Subject<string>();

		public changeUsername(username: string) {
   		this.username$.next(username);
  	}
}
// export class SimpleService {
//   public count$ = new Subject<number>();

//   public changeCount(count: number) {
//      this.count$.next(count);
//   }
// }
