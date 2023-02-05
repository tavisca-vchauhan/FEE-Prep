import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //responseType: 'arraybuffer' | 'blob' | 'json' | 'text',

  dataUrl = '/assets/';
  constructor(private http: HttpClient) {}

  getList(type: string) {
    const url = this.dataUrl + type + '.json';
    return this.http.get(url);
  }
}
