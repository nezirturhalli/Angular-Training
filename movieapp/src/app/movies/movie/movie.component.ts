import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieRepository } from 'src/app/models/movie.repository';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  ngOnInit(): void {}
  movies: Movie[];
  movieRepository: MovieRepository;
  title: string = 'Movies';

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
  }
}
