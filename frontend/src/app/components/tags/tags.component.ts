import { Component, OnInit, inject } from '@angular/core';
import { Tag } from 'src/app/models/tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  template: `
    <div *ngIf="tags"
      class="flex flex-wrap justify-center items-center m-2">

      <a *ngFor="let tag of tags"
        routerLink="/tag/{{ tag.name }}"
        class="badge badge-outline badge-primary block m-1">
        <span class="tag">{{ tag.name }}</span>({{ tag.count }})
      </a>
    </div>
  `,
})
export class TagsComponent implements OnInit {
  #foodService = inject(FoodService);

  tags: Tag[] = [];

  ngOnInit(): void {
    this.tags = this.#foodService.getAllTags();
  }
}
