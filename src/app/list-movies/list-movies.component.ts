import {Component, OnInit} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {MovieService} from "../service/movie.service";
import {Movie} from "../model/movie";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  allMovies : Movie[]=[];
  moviesJson = new MovieService(this.http);

  searchQuery = '';

  getAllMovies(){
    this.moviesJson.getMovies()
                   .subscribe(data => {this.allMovies=data.results;});
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getAllMovies();
  }

  searchMovies(){
    console.log(this.searchQuery)
      this.moviesJson.searchMovies(this.searchQuery, 1).subscribe(
        (data) => {
          this.allMovies = data.results;
          console.log(data)
        }
      );
}

saveFavouriteMovie(title: string) {
  this.moviesJson.createFavouriteMovie(title).subscribe(
    (data) => console.log('Movie saved successfully:', data),
    (error) => console.error('Error saving movie:', error.error) // Log the error message
  );
}


}