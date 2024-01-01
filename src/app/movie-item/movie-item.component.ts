import { Component, Input } from '@angular/core';
import { MovieService } from '../service/movie.service';
import {HttpClient} from "@angular/common/http";
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {



  moviesJson = new MovieService(this.http);

  searchQuery = '';

  constructor(private http: HttpClient) {
  }

  @Input() Movie:any;
  @Input() MovieItemComponent:any;
  @Input() Title!: string | undefined;
  @Input() Image!: string | undefined;
  @Input() Id!: number | undefined;
  @Input() Date!: string | undefined;

}
