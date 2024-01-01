import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit{

  @Input() Movie:any;

  Movies : Movie[] | undefined;
  comments : Comment[] | undefined;

  searchQuery = '';

  moviesJson = new MovieService(this.http);

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getComments()
  }

  saveComment(movieId: number) {
    this.moviesJson.createComment(movieId, this.searchQuery, movieId).subscribe(
      (data) => console.log('Movie saved successfully:', data),
      (error) => console.error('Error saving movie:', error.error)
    );
  }

  private getComments(){
    this.moviesJson.getComments().subscribe( data => {
      this.comments = data;
      console.log(this.comments);
    })
  }

}
