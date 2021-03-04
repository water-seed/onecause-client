import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastService } from '../toast.service';
import { catchError, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly toastService: ToastService
  ) { }

  login(
    username: string,
    password: string
  ): Observable<any> {

    // if was a real token, would affix to all http request with an angular inteceptor 
    const date = new Date();
    const tokenHour = date.getUTCHours() + 1;
    const tokenMinute = date.getUTCMinutes() + 1;
    const token = `${tokenHour.toString().padStart(2, "0")}${tokenMinute.toString().padStart(2, "0")}`;

    return this.httpClient.post(`${environment.apiUrl}/login`, {
      username,
      password,
      token,
    }).pipe(
      take(1),
      tap(() => {
        // wrap this in a less browser specific method where the native client can do what is necessary to bring the user to a new screen
        window.location.href = "https://onecause.com";
      }),
      catchError((err) => {
        this.toastService.showToast('error', err.error);
        throw err;
    }));
  }
}
