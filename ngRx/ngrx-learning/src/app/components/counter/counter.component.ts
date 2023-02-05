import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { DataService } from '../../services/data-service/data.service';
import * as userAction from '../../store/actions/user.actions';
import * as fromUser from '../../store/selectors/user.selectors';
import * as productAction from '../../store/actions/product.actions';
import * as selectFromProduct from '../../store/selectors/products.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter = 0;
  data: any | undefined;
  constructor(
    private dataService: DataService,
    private store: Store<AppState>,
    private cd: ChangeDetectorRef
  ) {}

  products: any;

  ngOnInit(): void {}

  onIncrement() {
    this.counter++;
    this.store.select(fromUser.getUsers).subscribe((users) => {
      if (users) this.data = users;
      this.cd.detectChanges();
    });
    this.store.select(selectFromProduct.getProducts).subscribe((products) => {
      this.products = products;
      this.cd.detectChanges();
    });
    this.store.select(fromUser.getError).subscribe((err) => {
      if (err) this.data = err;
    });
    // this.dataService.getList('users').subscribe((data: any) => {
    //   this.data = data;
    //   this.cd.detectChanges();
    // });
  }

  onDecrement() {
    this.counter--;
    this.store.dispatch(new userAction.GetUsersList()); // action dispatch
    this.store.dispatch(new productAction.GetProducts());
  }

  onReset() {
    this.counter = 0;
    this.data = undefined;
    // localStorage.removeItem('state');
    this.cd.detectChanges();
  }
}
