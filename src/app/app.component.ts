import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Este formato es solo cuando se tiene el app.components vacio
  template: '<router-outlet></router-outlet>',
  // Sino seria el de la ruta
  /*templateUrl: './app.component.html',*/
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
