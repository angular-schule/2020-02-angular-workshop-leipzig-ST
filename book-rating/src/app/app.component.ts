import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';


  constructor() {

    function producer(o) {
      o.next(Math.random());
      o.next('Sachsen');
      o.error('Anhalt');
      setTimeout(() => o.complete(), 2000);
    }


    const observer = {
      next: e => console.log(e),
      error: e => console.error(e),
      complete: () => console.log('C')
    };


    const obs$ = new Observable(producer);
    obs$.subscribe(observer);
    obs$.subscribe(observer);




  }
}
