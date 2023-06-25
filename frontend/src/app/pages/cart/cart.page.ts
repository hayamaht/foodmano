import { Component, inject } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage {

  #cartService = inject(CartService);

  cart!: Cart;

  ngOnInit(): void {
    this.setCart();
  }

  setCart() {
    this.cart = this.#cartService.get();
  }

  removeFromCart(cartItem: CartItem) {
    this.#cartService.remove(cartItem.food);
    this.setCart();
  }

  changeQuantity(quantityStr: string, cartItem: CartItem) {
    const q = parseInt(quantityStr);
    this.#cartService.changeQuatity(q, cartItem.food);
    this.setCart();
  }
}
