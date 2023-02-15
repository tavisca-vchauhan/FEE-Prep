import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { getUserToken } from '../store/selectors/app.selectors';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private store: Store<AppState>) {}

  userToken: string = '';

  getData(url: string): Observable<any> {
    this.store
      .select(getUserToken)
      .subscribe((token) => (this.userToken = token));
    return new Observable((observer) => {
      fetch(url, {
        method: 'GET' /* or POST/PUT/PATCH/DELETE */,
        headers: {
          Authorization: `Bearer ${this.userToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          observer.next(responseData);
          observer.complete();
        })
        .catch((error) => observer.error(error.message));
    });
  }
}
