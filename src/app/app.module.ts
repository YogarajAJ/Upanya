import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksreviewComponent } from './booksreview/booksreview.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookReviewComponent,
    BookListComponent,
    BooksreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
