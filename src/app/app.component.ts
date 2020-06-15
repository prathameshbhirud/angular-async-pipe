import { Component } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  observableBooks: Observable<Book[]>
  observableTime: Observable<string>

  constructor(private bookService: BookService){}

  ngOnInit(){
    this.observableBooks = this.bookService.getBooksWithObservable();
    this.observableTime = this.bookService.getCurrentTime();
  }
}
