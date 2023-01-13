import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfComponent implements OnInit, OnChanges {
  constructor(private cd: ChangeDetectorRef) {}

  obsStudentList: string[] = [];
  obsStudentDesc = '';
  obsStudentObj: Object = {};

  studentList = ['Ram', 'Sita', 'Arjun', 'Vish'];

  studentObj = {
    id: 1,
    name: 'Ram',
  };

  studentDesc = ' Ram is very good student';

  studentList$: Observable<string[]> = of(this.studentList);

  studentObj$: Observable<Object> = of(this.studentObj);

  studentDesc$: Observable<string> = of(this.studentDesc);

  ngOnInit() {
    this.studentDesc$.subscribe((data) => {
      this.obsStudentDesc = data;
    });

    this.studentList$.subscribe((data) => {
      this.obsStudentList = data;
    });

    this.studentObj$.subscribe((data) => {
      this.obsStudentObj = data;
    });

    setTimeout(() => {
      this.studentDesc = 'Ram is not concentrating on studies now.';
      this.studentList.push('Shalini');
      this.studentObj.id = 3;
      this.cd.detectChanges();
    }, 3000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
