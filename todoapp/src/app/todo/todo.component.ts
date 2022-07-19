import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}
  model = new Model();
  message = '';
  getName() {
    return this.model.name;
  }
  getItems() {
    return this.model.items;
  }
  addItem(value: string) {
    this.message = value;
  }
}
