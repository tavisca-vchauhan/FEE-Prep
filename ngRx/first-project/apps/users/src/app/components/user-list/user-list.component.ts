import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces';
import { DataService } from '@shared/services';
import { USERS_DATA_URL } from '@shared/constants';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private dataService: DataService) {}

  userList: User[];

  ngOnInit(): void {
    this.dataService
      .getData(USERS_DATA_URL)
      .subscribe((users) => (this.userList = users));
  }
}
