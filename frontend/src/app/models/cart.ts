import { CartItem } from "./cart-item";

export interface Cart {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
}
