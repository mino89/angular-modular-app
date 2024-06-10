import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {

  messageSubject = new BehaviorSubject<string>('');
  public message$ = this.messageSubject.asObservable();

  obs$ = new Observable<number>((subscriber) => {
    let count = 0;
    let intervalId = setInterval(() => {
      count++;
      subscriber.next(count);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  get obsObj() {
    return this.obs$;
  }
  
  generateCount(): Observable<number> {
    return this.obsObj
  }
  
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
