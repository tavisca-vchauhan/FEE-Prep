import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit, OnDestroy {
  number$ = interval(500);
  number: number = 0;

  subscription = new Subscription();
  constructor() {}
  ngOnInit(): void {
    this.subscription.add(
      this.number$
        .pipe(
          take(10), // take will take only first 10 outputs
          debounceTime(2000) // it will hold the value to subscribe for 2000 ms.
        )
        .subscribe((data) => {
          console.log(data);
          this.number = data;
          if (data > 10) {
            this.ngOnDestroy(); // calling manually to stop consoling the numbers
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
