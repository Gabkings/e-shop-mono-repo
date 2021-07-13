import {Injectable} from '@angular/core';
import {Cart, CartItem} from "../models/cart";

export const CART_KEY = 'cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  initialCart(): any {
    const initialCart = {
      items: []
    }
    const initialCartJson = JSON.stringify(initialCart)
    localStorage.setItem(CART_KEY, initialCartJson)
  }

  getCart(): Cart {
    return JSON.parse(localStorage.getItem(CART_KEY) || '{}')
  }

  addItemToCart(cartItem: CartItem): Cart {
    let current_cart = JSON.parse(localStorage.getItem(CART_KEY) || '{}')
    const cartItemExist = current_cart?.items.find((item: CartItem) => item.productId === cartItem.productId)
    if (cartItemExist) {
      let product;
      let index;
      for (let i = 0; i < current_cart.items.length; i++) {
        product = current_cart.items[i]
        if (product.productId == cartItem.productId) {
          index = i
          break
        }
      }

      current_cart.items.splice(index, 1)

      product.quantity += cartItem.quantity

      current_cart.items.push(product)

      const initialCartJson = JSON.stringify(current_cart)
      localStorage.setItem(CART_KEY, initialCartJson)
      return current_cart
    } else {
      current_cart.items.push(cartItem)
      const initialCartJson = JSON.stringify(current_cart)
      localStorage.setItem(CART_KEY, initialCartJson)
      return current_cart
    }
  }
}
