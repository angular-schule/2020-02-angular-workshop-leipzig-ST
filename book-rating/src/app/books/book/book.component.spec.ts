import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { doesNotThrow } from 'assert';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      title: '',
      description: '',
      isbn: '000',
      rating: 3,
      price: 0
    };

    // Wichtig: detectChanges erst nach Initialisierung von book
    // sonst schlägt Test fehl, weil Template z.B. "book.title" nicht auflösen kann
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for doRateUp()', () => {
    // Arrange
    let emittedBook: Book;

    component.rateUp.subscribe(book => {
      emittedBook = book; // funktioniert nur, weil EventEmitter synchron ist!
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBe(component.book);
  });
});
