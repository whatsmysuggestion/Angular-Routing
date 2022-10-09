import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
   template: `<ul>
      <li><a [routerLink] = "['/P']">Product</a></li>
      <li><a [routerLink] = "['/I']">Inventory</a></li>
   </ul>
   <router-outlet></router-outlet>`
})
export class AppComponent {
 
}
