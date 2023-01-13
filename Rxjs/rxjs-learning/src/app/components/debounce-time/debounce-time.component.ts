import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  // searchForm = new FormGroup({
  //   searchString: new FormControl(''),
  // });

  searchForm = this.fb.group({
    searchString: [''],
  });

  ngOnInit(): void {
    this.searchForm
      .get('searchString')
      ?.valueChanges.pipe(debounceTime(1000))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
