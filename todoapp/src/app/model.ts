import { TodoItem } from './todoitem';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Nezir';
    this.items = [];
  }
}

const model = new Model();
