import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResult } from './models/login-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(
    username: string,
    password: string,
    token: string
  ): Observable<LoginResult> {
    return this.httpClient.post<LoginResult>(environment.apiUrl, {
      username,
      password,
      token,
    })
  }
}
