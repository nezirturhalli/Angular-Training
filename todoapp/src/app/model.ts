import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Nezir';
    this.items = [
      { description: 'Breakfast', action: true },
      { description: 'Sports', action: false },
      { description: 'Coffee', action: true }
    ];
  }
}

const model = new Model();
