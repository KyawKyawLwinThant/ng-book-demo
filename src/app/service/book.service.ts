import { Injectable } from '@angular/core';
import { Observable, from, of, shareReplay } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  books: Book[]=[];

  findBookById(id:number):Observable<Book>{
       return from(this.books.filter( b => b.id === id));
  }

  constructor() {}

  getAllBooks(): Observable<Book[]> {
    this.books.push({
      id: 1,
      title: 'A pale view of hill',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'IShiguro',
    });

    this.books.push({
      id: 2,
      title: 'Far From the Maddening Crowd',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'Thomas Hardy',
    });
    this.books.push({
      id: 3,
      title: 'Return of the Native',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'Thomas Hardy',
    });
    this.books.push({
      id: 4,
      title: 'Under the Greenwood Tree',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'Thomas Hardy',
    });
    this.books.push({
      id: 5,
      title: 'Jude , Unobscured',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'Thomas Hardy',
    });
    this.books.push({
      id: 6,
      title: 'The Unconsoled',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'Ishigoro',
    });
    this.books.push({
      id: 7,
      title: 'Snow Country',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'Kawabata',
    });
    this.books.push({
      id: 8,
      title: 'Izu Dancer',
      imgUrl:
        'https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      price: 50,
      author: 'Kawabata',
    });
    return of(this.books)
    .pipe(
      shareReplay()
    );
  }
}
