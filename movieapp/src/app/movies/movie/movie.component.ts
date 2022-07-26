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
  filteredMovies: Movie[];
  popularMovies: Movie[];
  movieRepository: MovieRepository;
  title: string = 'All Movies';
  today: Date = new Date();
  filterText: string = '';

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getPopularMovies();
    this.filteredMovies = this.movies;
  }

  onInputChange() {
    console.log(this.filterText);

    this.filteredMovies = this.filterText
      ? this.movies.filter(
          (m: Movie) =>
            m.title.toLowerCase().indexOf(this.filterText) !== -1 ||
            m.description.toLowerCase().indexOf(this.filterText) !== -1
        )
      : this.movies;
  }

  addToList($event: any, movie: Movie) {
    // console.log("Successful! Adding to list "+ movie.title+"...");
    // console.log($event.target.classList);
    if ($event.target.classList.contains('btn-primary')) {

      $event.target.innerText="Remove";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
    }
    else{
      
      $event.target.innerText="Add";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
    }
  }
}
