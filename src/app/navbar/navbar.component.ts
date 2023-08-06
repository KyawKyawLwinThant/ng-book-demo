import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cartItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  cart:CartItem[]=[];

  constructor(private cartService:CartService){
     
  }

  ngOnInit(): void {
      this.cartService.cart.subscribe(
        data => this.cart = data
      );
    
  }

}
