import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    // Arrange
    service = TestBed.get(BookRatingService);
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 0
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up by one', () => {
    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4); // konkrete Werte prüfen, keine Re-Implementierung
  });

  it('should rate down by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate higher than 5', () => {
    // Arrange
    book.rating = 5;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });

});


