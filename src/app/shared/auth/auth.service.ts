import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPageModel } from 'src/app/auth/login-page-model';
import { TokenModel } from './token-model';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userLogin(payload: LoginPageModel) {
    return this.http.post('http://localhost:3000/auth/login', payload).pipe(
      map((data) => {
        var token = data as TokenModel;
        localStorage.setItem('tokens', JSON.stringify(token));
        return true;
      }),
      catchError((error) => {
        console.log(error);
        return of(false);
      })
    );
  }
}
