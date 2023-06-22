import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getAll() {
    return sample_foods;
  }

  search(term: string) {
    return this.getAll()
      .filter(food =>
        food.name.toLowerCase().includes(term.toLowerCase())
      );
  }
}
