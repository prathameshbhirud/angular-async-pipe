import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "assets/books.json";

  constructor(private http: HttpClient) { }

  getBooksWithObservable(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }
  
  getCurrentTime(): Observable<string> {
    return new Observable<string>((observer: Subscriber<string>) => {
        //1 second interval
        setInterval(() => observer.next(new Date().toString()), 1000);
      });
      }
}
