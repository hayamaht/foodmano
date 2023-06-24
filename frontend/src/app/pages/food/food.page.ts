import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Food } from 'src/app/models/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss']
})
export class FoodPage implements OnInit {

  #route = inject(ActivatedRoute);
  #router = inject(Router);
  #foodService = inject(FoodService);
  #cartService = inject(CartService);

  food!: Food | undefined;
  items!: MenuItem[];
  home!: MenuItem;

  ngOnInit(): void {
    const id = this.#route.snapshot.params['id'];
    this.food = this.#foodService.getById(id);
    this.items = [
      { label: this.food?.name }
    ];
    this.home = {
      icon: 'pi pi-home',
      routerLink: '/'
    };
  }

  addToCart() {
    if (!this.food) return;

    this.#cartService.add(this.food);
    this.#router.navigateByUrl('/cart');
  }
}
