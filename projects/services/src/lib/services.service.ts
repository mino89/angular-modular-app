import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {

  messageSubject = new BehaviorSubject<string>('');
  public message$ = this.messageSubject.asObservable();


  
  generateCount(): Observable<number> {
    return new Observable<number>((subscriber) => {
      let count = 0;
      let intervalId = setInterval(() => {
        count++;
        subscriber.next(count);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    });
  }
  
  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
}
