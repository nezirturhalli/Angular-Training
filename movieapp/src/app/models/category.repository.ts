import { Category } from './category';

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, categoryName: 'Adventure' },
      { id: 2, categoryName: 'Romantic' },
      { id: 3, categoryName: 'Drama' },
      { id: 4, categoryName: 'Science Fiction' }
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
