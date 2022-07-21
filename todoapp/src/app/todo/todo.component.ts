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
  constructor() {
    this.model.items = this.getItemsFromLS();
  }
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
      let data = { description: this.inputText, action: false };
      this.model.items.push(data);

      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem('items', JSON.stringify(items));
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
  getItemsFromLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem('items');
    if (value !== null) {
      items = JSON.parse(value);
    }
    return items;
  }
  onActionChanged(item: TodoItem) {
    console.log(item);
    let items= this.getItemsFromLS();

    localStorage.clear();
    items.forEach(i =>{
      if (i.description == item.description) {
        i.action = item.action;

      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
}
