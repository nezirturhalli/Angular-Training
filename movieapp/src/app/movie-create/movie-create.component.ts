import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService],
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  addMovie(title: any, description: any, imageUrl: any, categoryId: any) {
    console.log(
      title.value,
      description.value,
      imageUrl.value,
      categoryId.value
    );

    if (
      title.value === '' ||
      description.value === '' ||
      categoryId.value === '' ||
      imageUrl.value === '' ||
      categoryId.value === ''
    ) {
      this.alertify.error('Tüm alanları doldurmalısınız!');
      return;
    } else this.alertify.success('Film başarıyla eklendi!');

    const extensionsImage = ['jpeg', 'jpg', 'png'];
    const extensionForImage = imageUrl.value.split('.').pop();

    if (extensionForImage.indexOf(extensionsImage) === -1) {
      this.alertify.warning(
        "sadece 'jpeg','jpg','png' uzantılı resimler ekleyebilirsiniz! "
      );
    }

    const movie = {
      id: 0,
      title: title.value,
      description: description.value,
      imageUrl: imageUrl.value,
      isPopular: false,
      publishedDate: new Date().getTime(),
      categoryId: categoryId.value,
    };

    this.movieService.addMovie(movie).subscribe((data) => {
      this.router.navigate(['/movies/' + data.id]);
    });
  }
}
