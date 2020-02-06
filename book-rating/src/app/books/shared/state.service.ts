import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

interface MyState {
  counter: number;
  foo: string;
  bar: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  initialState: MyState = {
    counter: 0,
    foo: 'hallo',
    bar: true
  };

  input$ = new Subject<string>();

  state$ = this.input$.pipe(
    startWith('INIT'),
    scan(this.reducer, this.initialState)
    // scan((acc, item) => acc + item, this.initialState)
  );

  reducer(state: MyState, message: string): MyState {
    switch (message) {
      case 'INC': return { ...state, counter: state.counter + 1 };
      case 'DEC': return { ...state, counter: state.counter - 1 };
      case 'RESET': return { ...state, counter: 0 };
      default: return state;
    }
  }

  constructor() { }
}
