import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'SHAZAM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis aperiam voluptas suscipit a. Nemo hic laborum cum molestias nostrum minima sapiente optio facilis nam. Fugiat libero obcaecati numquam quod!',
        imageUrl: '1.jpeg',
        isPopular: true,
        publishedDate: new Date(1990,10,12),
      },
      {
        id: 2,
        title: 'AMAZING GRACE ARETHA FRANKLIN',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis aperiam voluptas suscipit a. Nemo hic laborum cum molestias nostrum minima sapiente optio facilis nam. Fugiat libero obcaecati numquam quod!',
        imageUrl: '2.jpeg',
        isPopular: false,
        publishedDate: new Date(1990,2,13),
      },
      {
        id: 3,
        title: 'HIGH LIFE',
        description: 'details of the movie',
        imageUrl: '3.jpeg',
        isPopular: true,
        publishedDate: new Date(1990,8,14),
      },
      {
        id: 4,
        title: 'BILBOARD',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis aperiam voluptas suscipit a. Nemo hic laborum cum molestias nostrum minima sapiente optio facilis nam. Fugiat libero obcaecati numquam quod!',
        imageUrl: '4.jpeg',
        isPopular: false,
        publishedDate: new Date(1990,5,15),
        
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
