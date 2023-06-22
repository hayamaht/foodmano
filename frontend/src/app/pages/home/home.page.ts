import { Component, OnInit, inject } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  #foodService = inject(FoodService);

  foods: Food[] = [];

  ngOnInit(): void {
    this.foods = this.#foodService.getAll();

  }
}
