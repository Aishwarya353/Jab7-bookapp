import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
//client side paging
//import { JwPaginationComponent } from 'jw-angular-pagination';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'category', component: BookCategoryComponent},
  // {path: 'books/:id', component: BookDetailsComponent},
  //{path: 'books', component: BookListComponent},
  //{path: 'search/:keyword', component: BookListComponent},
  //{path: 'category/:id', component: BookListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    //BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    SearchComponent,
    HomeComponent,
    CartStatusComponent,
    FavouritesComponent,
    CheckoutComponent
    //client side paging
    //JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
