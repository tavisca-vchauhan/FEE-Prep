import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOGIN_API_POINT } from '@shared/constants';
import { CurrentUser } from '../../../../../../apps/shared/interfaces';
import { Credentials } from '../../interfaces';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  login(cred: Credentials): Observable<CurrentUser | any> {
    return new Observable((observer) => {
      fetch(LOGIN_API_POINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: cred.username,
          password: cred.password,
          //expiresInMins: 1, // optional
        }),
      })
        .then((res) => res.json())
        .then((authResponse) => {
          observer.next(authResponse);
          observer.complete();
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
}
