import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category = null;
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => console.log(err)
    );
  }

  displayAll: boolean = true; // disable patch

  selectCategory(item?: Category) {
    if (item) {
      this.selectedCategory = item;
      this.displayAll = false;
    } else{
      this.selectedCategory = null;
      this.displayAll = true;

    } 
  }
}
