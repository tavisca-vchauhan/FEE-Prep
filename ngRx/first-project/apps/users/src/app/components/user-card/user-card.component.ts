import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() user: User = null;

  ngOnInit(): void {}

  showDetails(id: number) {
    this.router.navigate(['users/user-details', id]);
  }
}
