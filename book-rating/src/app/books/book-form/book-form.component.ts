import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  submitForm() {
    if (this.bookForm.invalid) {
      return;
    }

    const book: Book = {
      ...this.bookForm.value,
      rating: 1
    };

    this.submitBook.emit(book);
  }

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.invalid && control.touched;
  }

  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.hasError(errorCode) && control.touched;
  }

}
