import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo/foo.component';
import { SearchComponent } from './search/search.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CounterComponent } from './counter/counter.component';


const routes: Routes = [
  { path: 'books', component: DashboardComponent, children: [
    { path: 'foo', component: FooComponent },
    { path: 'bar', component: BarComponent },
  ] },

  { path: 'books/search', component: SearchComponent },
  { path: 'books/create', component: CreateBookComponent },
  { path: 'books/counter', component: CounterComponent },
  {
    path: 'books/:isbn',
    component: BookDetailsComponent,
    data: {
      name: 'Angular',
      title: 'Leipzig'
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
