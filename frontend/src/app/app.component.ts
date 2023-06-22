import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="text-3xl font-bold underline bg-red-400">
  Hello world!
</h1>
<p-button label="Primary"></p-button>
<p-button label="Secondary" styleClass="p-button-secondary"></p-button>
<p-button label="Success" styleClass="p-button-success"></p-button>
<p-button label="Info" styleClass="p-button-info"></p-button>
<p-button label="Warning" styleClass="p-button-warning"></p-button>
<p-button label="Help" styleClass="p-button-help"></p-button>
<p-button label="Danger" styleClass="p-button-danger"></p-button>
<div>
<button class="btn">Button</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Button</button>
<button class="btn btn-secondary">Button</button>
<button class="btn btn-accent">Button</button>
<button class="btn btn-ghost">Button</button>
<button class="btn btn-link">Button</button>
</div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
