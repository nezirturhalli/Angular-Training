import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  inputText: string = '';
  displayAll: boolean = false;
  constructor() {}
  model = new Model();
  getName() {
    return this.model.name;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem() {
    if (this.inputText != '') {
      this.model.items.push({ description: this.inputText, action: false });
      this.inputText = '';
    } else {
      alert('Please enter a value');
    }
  }

  displayCount() {
    return this.model.items.filter((i) => i.action).length;
  }

  getBtnClasses() {
    return {
      disabled: this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0,
    };
  }
}
