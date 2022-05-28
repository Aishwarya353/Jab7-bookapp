import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

// import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // books: Book[]
  // searchString = "";
  // constructor (private bookService: BookService) {}

  // onClickImage(book) {
  //   book.previewMode = !book.previewMode;
  // }

  // ngOnInit() {
  //   this.getBooks();
  // }

  // onSubmit() {
  //   this.getBooks()
  // }

  // private getBooks() {
  //   this.bookService.getBooks(this.searchString).then(data => {
  //     this.books = data;
  //   })
  // }

}

