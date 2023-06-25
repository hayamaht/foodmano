import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div *ngIf="visible"
      class="alert alert-warning shadow-sm mt-4"
    >
      <i class="pi pi-exclamation-triangle"
        style="font-size: 1.5rem;"
      ></i>
      <span class="text-2xl font-bold">
        {{ notFoundMessage }}
      </span>
      <a [routerLink]="resetLink"
        class="btn"
      >
        {{ resetLinkText }}
      </a>
    </div>
  `,
})
export class NotFoundComponent {
  @Input() visible = false;
  @Input() notFoundMessage = 'Not Found';
  @Input() resetLinkText = 'Go Home';
  @Input() resetLink = '/';
}
