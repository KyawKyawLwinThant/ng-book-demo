import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  implements OnInit{
   
  books$!:Observable<Book[]>;


   constructor(private bookService:BookService){

   }

   ngOnInit(): void {
      this.books$= this.bookService.getAllBooks();
   }

  


}
