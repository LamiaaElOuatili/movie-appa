import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { Favmovie } from '../model/favmovie';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_TOKEN :any= "42f43a8605126f0ed54ab183c372e71c";
  url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN
  private language = 'fr';
  
  back_url1 = "http://localhost:8080/favourites"
  back_url2 = "http://localhost:8080/addfavourite"

  back_url3 = "http://localhost:8080/comments"
  back_url4 = "http://localhost:8080/addcomment"

  constructor(private http :HttpClient) {}

  getMovies(){
    return  this.http.get<any>(this.url)
  }

  searchMovies(text: string, page: number) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_TOKEN}&language=fr&query=${text}&page=${page}`;
    return this.http.get<any>(url)
  }

  getFavouriteMovies(): Observable<Favmovie[]> {
    return this.http.get<Favmovie[]>(this.back_url1);
  }

  createFavouriteMovie(title: string): Observable<Object> {
    const data = { title }; 
    return this.http.post(this.back_url2, data);
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.back_url3);
  }

  createComment(id: number, comment: String, movieId: number): Observable<Object> { 
    const data = {id, comment, movieId}
    return this.http.post(this.back_url4, data);
  }
  
}
