import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  results$: Observable<Book[]>;
  loading = false;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    });

    this.results$ = this.searchForm.get('search').valueChanges.pipe(
      debounceTime(1000),
      filter(term => term.length >= 3 || term.length === 0),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => this.bs.search(term)),
      tap(() => this.loading = false)
    );
  }

}
