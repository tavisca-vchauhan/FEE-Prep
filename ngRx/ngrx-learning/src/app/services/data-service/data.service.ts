import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //responseType: 'arraybuffer' | 'blob' | 'json' | 'text',

  dataUrl = '/assets/';

  getList(url: string): Observable<any> {
    return Observable.create((observer) => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });

    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // //const url = this.dataUrl + type + '.json';
    // return this.http.get(this.url, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   responseType: 'json',
    // });
  }
}

/*

token: '411f24d9-188a-4c88-9e88-19948a48e668',
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Headers':
  'Origin, X-Requested-With, Content-Type, Accept, Authorization',
'Access-Control-Allow-Credentials': 'true',
'Access-Control-Allow-Methods': '*',

*/
