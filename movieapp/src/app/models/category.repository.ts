import { Category } from './category';

export class CategoryRepository {
  private categories: Category[];

  constructor() {
  
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
