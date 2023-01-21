import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-learning';

  str = '{"name":"john","age":22,"class":"mca"}';

  obj = {
    name: 'vish',
  };

  ngOnInit() {
    this.check(this.str);
    this.check(this.obj);
  }

  check(Value: any) {
    if (typeof Value !== 'object') {
      Value = JSON.parse(Value);
    }
    console.log(Value);
  }
}
