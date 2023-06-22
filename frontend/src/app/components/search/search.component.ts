import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  template: `
    <div class="flex justify-center items-center p-2">
      <i class="pi pi-search w-7 text-rose-600"></i>
      <input type="search" #searchInput
        class="input input-primary rounded-full"
        placeholder="Search..."
        (keyup.enter)="search(searchInput.value)"
        [value]="term"
      />
    </div>
  `,
})
export class SearchComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #router = inject(Router);

  term = '';

  ngOnInit(): void {
    this.#route.params.subscribe(params => {
      if(params['term']) {
        this.term = params['term'];
      }
    });
  }

  search(term: string) {
    if(!term) {
      this.#router.navigateByUrl(`/`);
      return;
    }
    this.#router.navigateByUrl(`/search/${term}`);
  }
}
