import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Category[]>('http://localhost:3000/categories')
      .subscribe((data) => {
        this.categories = data;
      });
  }

  displayAll: boolean = true; // disable patch

  selectCategory(item?: Category) {
    if (item) {
      this.selectedCategory = item;
      this.displayAll = false;
    } else this.selectedCategory = null;
  }
}
