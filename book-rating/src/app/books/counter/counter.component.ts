import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$ = this.state.state$.pipe(map(state => state.counter));

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.state$.subscribe(console.log);
  }

  increment() {
    this.state.input$.next('INC');
  }

  decrement() {
    this.state.input$.next('DEC');
  }

  reset() {
    this.state.input$.next('RESET');
  }

}
