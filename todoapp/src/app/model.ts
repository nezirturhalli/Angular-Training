import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Nezir';
    this.items = [
      { description: 'Breakfast', action: 'Yes' },
      { description: 'Sports', action: 'Yes' },
      { description: 'Coffee', action: 'No' },
      { description: 'Shopping', action: 'Yes' },
    ];
  }
}

const model = new Model();
