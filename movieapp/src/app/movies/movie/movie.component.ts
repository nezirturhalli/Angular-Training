import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService],
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  title: string = 'All Movies';
  filterText: string = '';

  error: any;

  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data) => {
        this.movies = data;
        this.filteredMovies = this.movies;
      },
      (error) => (this.error = error)
    );
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
      $event.target.innerText = 'Remove';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      this.alertify.success(movie.title + ' added to list!');
    } else {
      $event.target.innerText = 'Add';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      this.alertify.error(movie.title + ' remove from list!');
    }
  }
}
