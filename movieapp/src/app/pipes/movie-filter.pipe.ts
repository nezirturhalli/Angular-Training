import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter',
})
export class MovieFilterPipe implements PipeTransform {
  transform(movie: Movie[], filterText: string): Movie[] {
    filterText = filterText.toLowerCase();

    // console.log(filterText);
    // console.log(movie);

    return filterText
      ? movie.filter(
          (m: Movie) => m.title.toLowerCase().indexOf(filterText) !== -1 ||  m.description.toLowerCase().indexOf(filterText) !== -1)
      : movie;
  }
}
