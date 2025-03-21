import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'rxw-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

  targetPosition = [50, 50];
  @ViewChild('target', { static: true }) target;

  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseDown$ = fromEvent(this.target.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent(document, 'mouseup');

    /******************************/

    mouseDown$.pipe(
      concatMap(() => mouseMove$.pipe(takeUntil(mouseUp$))),
    ).subscribe(e => this.setTargetPosition(e));

    /******************************/
  }

  private setTargetPosition(event: MouseEvent) {
    const offset = 50;
    this.targetPosition = [
      event.pageX - offset,
      event.pageY - offset
    ];
  }

}
