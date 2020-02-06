import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  myObservable$: Observable<number | string>;

  ngOnInit() {
    /**
     * Erstelle ein Observable und schreibe es in this.myObservable$
     */

    /*this.myObservable$ = new Observable(obs => {
      setTimeout(() => {
        obs.next('STEH AUF!');
        const int = setInterval(() => {
          obs.next('STEH AUF!');
        }, 5000);

        setTimeout(() => {
          obs.complete();
          clearInterval(int);
        }, 11000);
      }, 10000);
    });*/


    /*this.myObservable$.pipe(
      take(2)
    ).subscribe(e => console.log(e));*/

    this.myObservable$ = timer(0, 1000).pipe(
      map(e => e * 33),
      filter(e => e % 2 === 0)
    );

  }

}
