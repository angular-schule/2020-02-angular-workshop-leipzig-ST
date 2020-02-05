import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { WidgetModule } from '../widget/widget.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    WidgetModule
  ]
})
export class BooksModule { }
