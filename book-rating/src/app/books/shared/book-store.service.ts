import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(`${this.apiUrl}/book/${isbn}`);
  }

  create(book: Book) {
    return this.http.post(`${this.apiUrl}/book`, book, { responseType: 'text' });
  }

  search(term: string) {
    if (!term) {
      return of([]);
    }
    return this.http.get<Book[]>(`${this.apiUrl}/books/search/${term}`);
  }
}
