import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css'],
})
export class ChildAComponent implements OnInit {
  @Input('temp') temp: TemplateRef<any>; // for Method 1

  // @ContentChild('temp') temp: TemplateRef<any>; // for Method 2
  // using @ContentChild() to access the projected content i.e <ng-template>.

  childData: any = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus. Urna molestie at elementum eu facilisis. Erat pellentesque adipiscing commodo elit at imperdiet dui..`,

    `Non consectetur a erat nam at. Augue ut lectus arcu bibendum at varius vel. Pulvinar pellentesque habitant morbi tristique senectus et. Morbi blandit cursus risus at ultrices mi tempus. Enim blandit volutpat maecenas volutpat. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus.`,

    `Mauris pharetra et ultrices neque. Eget velit aliquet sagittis id consectetur purus. Mattis aliquam faucibus purus in massa tempor. Integer vitae justo eget magna. Mattis enim ut tellus elementum sagittis vitae.`,

    `Urna porttitor rhoncus dolor purus. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.`,

    `Neque vitae tempus quam pellentesque nec nam aliquam. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Magna eget est lorem ipsum dolor sit. Faucibus ornare suspendisse sed nisi lacus.`,
  ];

  constructor() {}

  ngOnInit() {}
}
