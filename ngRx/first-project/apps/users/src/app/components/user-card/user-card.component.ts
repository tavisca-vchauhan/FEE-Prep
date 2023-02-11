import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  constructor() {}

  @Input() user: User = null;

  ngOnInit(): void {}
}
