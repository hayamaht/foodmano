import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  #route = inject(ActivatedRoute);
  #foodService = inject(FoodService);

  foods: Food[] = [];

  ngOnInit(): void {
    this.#route.params.subscribe(params => {
      const term = params['term'];
      const tag = params['tag'];

      if (term) {
        this.foods = this.#foodService.search(term);
      } else if(tag) {
        this.foods = this.#foodService.getByTag(tag);
      } else {
        this.foods = this.#foodService.getAll();
      }
    });

  }
}
