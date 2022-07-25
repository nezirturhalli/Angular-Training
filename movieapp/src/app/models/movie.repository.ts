import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'SHAZAM',
        description: 'details of the movie',
        imageUrl: '1.jpeg',
        isPopular: true,
      },
      {
        id: 2,
        title: 'AMAZING GRACE ARETHA FRANKLIN',
        description: 'details of the movie',
        imageUrl: '2.jpeg',
        isPopular: false,
      },
      {
        id: 3,
        title: 'HIGH LIFE',
        description: 'details of the movie',
        imageUrl: '3.jpeg',
        isPopular: true,
      },
      {
        id: 4,
        title: 'BILBOARD',
        description: 'details of the movie',
        imageUrl: '4.jpeg',
        isPopular: false,
      },
    ];
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
