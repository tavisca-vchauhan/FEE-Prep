import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor() {}

  getData(url: string): Observable<JSON> {
    return new Observable((observer) => {
      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          observer.next(responseData);
          observer.complete();
        })
        .catch((error) => error);
    });
  }
}
