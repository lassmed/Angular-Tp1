import { Component, OnDestroy } from '@angular/core';
import { Subject, merge, startWith, takeUntil, scan, reduce } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-merge-scan-reduce',
  templateUrl: './merge-scan-reduce.component.html',
  styleUrls: ['./merge-scan-reduce.component.css']
})
export class MergeScanReduceComponent implements OnDestroy {
  input1FormControl = new FormControl(0);
  input2FormControl = new FormControl(0);

  private destroy$ = new Subject<void>();
  private mergedDestroy$ = new Subject<void>();
  private input1$ = this.input1FormControl.valueChanges;
  private input2$ = this.input2FormControl.valueChanges;

  mergeResult: number | undefined;
  scanResult: number | undefined;
  reduceResult: number | undefined;

  constructor() {
    const merged$ = merge(this.input1$, this.input2$).pipe(
      takeUntil(this.mergedDestroy$)
    );

    merged$.subscribe((result) => {
      this.mergeResult = result ?? undefined;
    });

    merged$
      .pipe(
        scan((acc, curr) => acc + (curr ?? 0), 0),
        takeUntil(this.destroy$)
      )
      .subscribe((result) => {
        this.scanResult = result;
      });

    merged$
      .pipe(
        startWith(0),
        reduce((acc, curr) => {
          console.log('reduce intermediate: ', acc, curr);
          return (acc ?? 0) + (curr ?? 0);
        }),
        takeUntil(this.destroy$) //
      )
      .subscribe((result) => {
        console.log('reduce final: ', result);
        this.reduceResult = result ?? undefined;
      });
  }

  terminateStream() {
    console.log('Terminating Streams');
    this.mergedDestroy$.next();
    this.mergedDestroy$.complete();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
