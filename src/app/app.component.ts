import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-random-activity></app-random-activity> `,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
      }
    `,
  ],
})
export class AppComponent {}
