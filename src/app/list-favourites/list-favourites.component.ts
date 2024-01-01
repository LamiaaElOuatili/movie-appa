import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';
import { Favmovie } from '../model/favmovie';

@Component({
  selector: 'app-list-favourites',
  templateUrl: './list-favourites.component.html',
  styleUrls: ['./list-favourites.component.css']
})
export class ListFavouritesComponent implements OnInit {

  movies: Movie[] | undefined;

  favourites: Favmovie[] | undefined;

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.getFavouriteMovies()
  }

  private getFavouriteMovies(){
    this.movieService.getFavouriteMovies().subscribe(data => {
      this.favourites=data;
      console.log(this.movies);
    })
  }
}
