import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
import { ImageValidator } from '../validators/image.validator';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService],
})
export class MovieCreateComponent implements OnInit {
  categories: Category[];
  model: any = {
    categoryId: '',
  };

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

  movieForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [
      Validators.required,
      ImageValidator.isValidExtension,
    ]),
    categoryId: new FormControl('', [Validators.required]),
  });

  get title() {
    return this.movieForm.get('title');
  }
  get imageUrl() {
    return this.movieForm.get('imageUrl');
  }

  clearForm() {
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: '',
    });
  }

  addMovie() {
    const movie = {
      id: 0,
      title: this.movieForm.value.title,
      description: this.movieForm.value.description,
      imageUrl: this.movieForm.value.imageUrl,
      isPopular: false,
      publishedDate: new Date().getTime(),
      categoryId: this.movieForm.value.categoryId,
    };

    this.movieService.addMovie(movie).subscribe((data) => {
      this.router.navigate(['/movies/' + data.id]);
    });
  }

  log(value: any) {
    console.log(value);
  }
}
