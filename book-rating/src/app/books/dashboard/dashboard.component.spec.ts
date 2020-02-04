import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { CardComponent } from 'src/app/widget/card/card.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock;

  beforeEach(async(() => {

    ratingMock = {
      rateUp: () => book
    };

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, BookComponent, CardComponent ],
      providers: [
        // wann immer jemand BRS anfordert, wird ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();

    book = {
      title: '',
      description: '',
      rating: 3,
      isbn: '',
      price: 0,
    };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should call service for rateUp()', () => {
    // Arrange
    const rs = TestBed.get(BookRatingService);

    // rs.rateUp überwachen, aber originalen Call trotzdem durchleiten (= originale Methode trotzdem aufrufen)
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.rateUp(book);

    // prüfen, ob Service/Spy aufgerufen wurde
    expect(rs.rateUp).toHaveBeenCalled();
  });
});
