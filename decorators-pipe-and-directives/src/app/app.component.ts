import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  switchCases = {
    HI: 'hi',
    BYEE: 'bye',
    TATA: 'tata',
  };
  isRed = true;
  testColor = '';
  attributeColor = 'yellow';
  text = 'Hello world... this is stockExchange application';
  inputText = '';
  objectArray = [
    {
      name: 'vish',
      age: 30,
    },
    {
      name: 'shalini',
      age: 28,
    },
  ];

  constructor() {
    this.toggleclass();
  }

  toggleclass() {
    setTimeout(() => {
      this.isRed = !this.isRed;
      this.toggleclass();
    }, 3000);
  }

  // USE Keyup event ... angular event

  // @HostListener('keypress', ['$event'])
  // getText($event: KeyboardEvent) {
  //   this.inputText = this.inputText + $event.key;
  // }

  getText($event: any) {
    this.inputText = $event.target.value;
  }

  changeColor(event: any) {
    if (event.ctrlKey) {
      this.testColor = event.srcElement.value;
    }
  }
}
