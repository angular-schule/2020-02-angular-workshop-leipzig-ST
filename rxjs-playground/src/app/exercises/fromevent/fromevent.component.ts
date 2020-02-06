import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent implements OnInit {

  currentWidth = 0;

  ngOnInit() {

    const debouncedEvents = fromEvent(window, 'resize').pipe(
      debounceTime(1000)
    );

    debouncedEvents.pipe(
      startWith('hallo'),
      map(() => window.innerWidth),
    ).subscribe(width => this.currentWidth = width);

  }

}
