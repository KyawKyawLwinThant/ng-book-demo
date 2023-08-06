import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  
  {
    path:'',redirectTo:'/books',pathMatch:'full'
  },
  {
    path:"books",component:BooksComponent
  },
  {
    path:"books/:id",component:BookDetailsComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
