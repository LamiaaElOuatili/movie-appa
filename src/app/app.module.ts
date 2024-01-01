import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieItemComponent } from './movie-item/movie-item.component';
import {FormsModule} from "@angular/forms";
import { DetailsMovieComponent } from './details-movie/details-movie.component';

import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { ListFavouritesComponent } from './list-favourites/list-favourites.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieItemComponent,
    DetailsMovieComponent,
    ListFavouritesComponent,
    ReviewComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

