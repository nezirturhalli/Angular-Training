import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  url = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) {}
  getMovies(categoryId: number): Observable<Movie[]> {
    let newUrl = this.url;

    if (categoryId) {
      newUrl += '?categoryId=' + categoryId;
    }

    return this.http.get<Movie[]>(newUrl).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  getMoviesById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + '/' + movieId).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  addMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };

    return this.http.post<Movie>(this.url, movie, httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to

      switch (error.status) {
        case 200:
          console.log('OK');
          break;
        case 404:
          console.log('NOT_FOUND');
          break;
        case 200:
          console.log('ACCESS_DENIED');
          break;
        case 500:
          console.log('INTERNAL_SERVER_ERROR');
          break;
        default:
          console.log('Something went wrong');
      }
    }
    return throwError(error.message);
  }
}
