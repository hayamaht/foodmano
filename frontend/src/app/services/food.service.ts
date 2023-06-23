import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getAll() {
    return sample_foods;
  }

  getAllTags() {
    return sample_tags;
  }

  getByTag(tag: string) {
    return tag === 'All' ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getById(id: string) {
    return this.getAll()
      .find(food => food.id === id);
  }

  search(term: string) {
    return this.getAll()
      .filter(food =>
        food.name.toLowerCase().includes(term.toLowerCase())
      );
  }
}
