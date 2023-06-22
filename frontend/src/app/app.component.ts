import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="text-3xl font-bold underline bg-red-400">
  Hello world!
</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
