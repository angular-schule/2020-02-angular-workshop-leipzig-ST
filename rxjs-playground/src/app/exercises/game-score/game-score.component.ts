import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent implements OnInit {

  logStream$ = new Subject();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore: number;

  ngOnInit() {

    /******************************/

    this.score$.pipe(
      scan((sum, nextItem) => sum + nextItem, 0)
    ).subscribe(score => this.currentScore = score);

    this.score$.pipe(
      reduce((sum, nextItem) => sum + nextItem, 0)
    ).subscribe(score => this.finalScore = score);

    /******************************/

    this.score$.subscribe(
      value => this.logStream$.next(value),
      err => {},
      () => this.logStream$.next('❌ COMPLETED')
    );
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
