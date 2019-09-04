# AngularLinkyModule
This application for creating auto link on urls like http://google.com, www.google.com, ebay etc

1. npm install --save angular-linky

import { LinkyModule } from 'angular-linky';
 
@NgModule({
  imports: [
    LinkyModule
  ]
})
class YourAppModule {}

<span [innerHTML]="yourText | linky"></span>
