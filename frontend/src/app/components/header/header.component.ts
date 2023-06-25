import { Component, OnInit, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  #cartService = inject(CartService);

  cartQuantity = 0;

  ngOnInit(): void {
    this.#cartService.getAsObservable().subscribe(cart => {
      this.cartQuantity = cart.totalCount;
    });
  }
}
