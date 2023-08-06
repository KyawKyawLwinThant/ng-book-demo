import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    PageNotFoundComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
