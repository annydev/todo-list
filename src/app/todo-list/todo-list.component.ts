import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  title = 'todo-list';

  items: TodoItem[] = [];
  newItem = new TodoItem();

  addToList() {
    if (this.newItem.title) {
      this.newItem.id = (this.items[this.items.length - 1]?.id ?? 0) + 1;
      this.items.push(this.newItem);
      this.newItem = new TodoItem();
    }
  }

  deleteItem(value) {
    this.items = this.items.filter((element) => {
      return element != value;
    });
  }

  toggleStatusItem(item) {
    let currentItem = this.items.find((element) => {
      return element.id === item.id;
    });
    currentItem.status = !currentItem.status;
  }
}

export class TodoItem {
  id: number;
  title: string;
  status: boolean;
}
