import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements AfterViewInit {
  eventData: any = null;

  @ViewChild('btn')
  btn!: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click').subscribe((data) => {
      this.getData(data);
    });

    const observable$: Observable<string> = fromEvent(
      this.btn.nativeElement,
      'click'
    );
    observable$.subscribe((data) => {
      console.log(data);
    });
  }

  getData(data: any) {
    this.eventData = data;
  }
}
