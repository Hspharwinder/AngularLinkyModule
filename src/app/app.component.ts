import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicClickLink';
  theList:any;
  myText = 'google.com can search trough www.ebay.com and http://www.amazon.com';
  constructor() {  }
}
