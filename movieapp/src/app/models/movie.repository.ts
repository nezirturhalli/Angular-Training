import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
  
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id == id);
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular == true);
  }
}
