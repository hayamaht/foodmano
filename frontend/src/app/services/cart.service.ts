import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food';

const FM_CART = 'foodmano_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  #cart = this.#getLocalStorage();
  #cartSubject = new BehaviorSubject<Cart>(this.#cart);

  get(): Cart {
    return this.#cartSubject.value;
  }

  getAsObservable(): Observable<Cart> {
    return this.#cartSubject.asObservable();
  }

  getItem(food: Food) {
    return this.#cart.items
      .find(item => item.food.id === food.id);
  }

  add(food: Food) {
    this.#cart.items = this.#cart.items || [];
    let cartItem = this.getItem(food);
    if (cartItem) return;

    this.#cart.items.push({
      food,
      price: food.price,
      quantity: 1,
    });
    this.#setLocalStorage();
  }

  remove(food: Food) {
    this.#cart.items = this.#cart.items
      .filter(item => item.food.id !== food.id);
    this.#setLocalStorage();
  }

  changeQuatity(quantity: number, food: Food) {
    let cartItem = this.getItem(food);
    if (!cartItem) { return; }
    cartItem.quantity = quantity;
    cartItem.price =  quantity * food.price;

    this.#setLocalStorage();
  }

  #setLocalStorage() {
    this.#cart.totalPrice = this.#cart.items
      .reduce((total, item) => total + item.price, 0);
    this.#cart.totalCount = this.#cart.items
      .reduce((total, item) => total + item.quantity, 0);

    localStorage.setItem(FM_CART, JSON.stringify(this.#cart));
    this.#cartSubject.next(this.#cart);
  }

  #getLocalStorage():Cart {
    const cartJson = localStorage.getItem(FM_CART);
    return cartJson ? JSON.parse(cartJson) : {} as Cart;
  }
}
