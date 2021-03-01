import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  // better typing
  private readonly toastSubject = new BehaviorSubject<any>(undefined);
  toast$ = this.toastSubject.asObservable();


  showToast(type: string, message: string, duration = 7000) {
    this.toastSubject.next({
      type,
      message
    });

    setTimeout(() => {
      this.toastSubject.next(undefined)
    }, duration);
  }
}
