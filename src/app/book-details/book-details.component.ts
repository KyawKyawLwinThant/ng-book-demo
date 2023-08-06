import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { CartService } from '../service/cart.service';
import { CartItem } from '../model/cartItem';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  constructor(private bookService:BookService,private route:ActivatedRoute,
    private cartService:CartService ){
  }

  book$!:Observable<Book>;

  ngOnInit(): void {
      const id=this.route.snapshot.paramMap.get('id') as string;

      this.book$=this.bookService.findBookById(parseInt(id));
      
  }
 /*
 id?:number;
    title?:string;
    imgUrl?:string;
    price?:number;
    author?:string;
    quantity?:number;
    */
  public addToCart(item:Book){
    let cartItem:CartItem={
        id:item.id,
        title:item.title,
        imgUrl:item.imgUrl,
        price:item.price,
        author:item.author,
        quantity:1
    }
    this.cartService.addToCart(cartItem);
  }


}
