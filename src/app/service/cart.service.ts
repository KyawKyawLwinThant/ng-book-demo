import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../model/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject:BehaviorSubject<CartItem[]>
      =new BehaviorSubject<CartItem[]>([]);
  cart:Observable<CartItem[]> = this.cartSubject.asObservable();
  
  cartItem:CartItem[]=[];

  constructor() { }

  public addToCart(item:CartItem){
     this.cartItem.push(item);
     this.cartSubject.next(this.cartItem);
  }
}
