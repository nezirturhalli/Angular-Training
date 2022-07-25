import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  categoryList = [
    { id: 1, categoryName: 'Adventure' },
    { id: 2, categoryName: 'Romantic' },
    { id: 3, categoryName: 'Drama' },
    { id: 4, categoryName: 'Science Fiction' },
  ];
}
