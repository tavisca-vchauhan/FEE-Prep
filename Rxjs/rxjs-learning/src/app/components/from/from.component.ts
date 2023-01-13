import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss'],
})
export class FromComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private cd: ChangeDetectorRef) {}

  categories = ['fashion', 'electronics', 'household', 'gaming', 'decoration'];

  categories$: Observable<string> = from(this.categories);
  categoryName = '';
  ngOnInit(): void {
    this.categories$.subscribe((data) => {
      this.categoryName = data;
    });
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnDestroy(): void {}
}
