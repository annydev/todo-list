import {Injectable} from '@angular/core';
import {TodoItem} from './todo';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class TodoService {
  items = new BehaviorSubject<TodoItem[]>([]);

  constructor() {
  }

  addToList(newItem: TodoItem): void {
    if (newItem.title) {
      const localItems = this.items.value;
      newItem.id = (localItems[localItems.length - 1]?.id ?? 0) + 1;

      localItems.push(newItem);

      this.items.next(localItems);
    }
  }

  deleteItem(id: number): void {
    this.items.next(this.items.value.filter((element) => {
      return element.id !== id;
    }));
  }

  getAllTodos(): BehaviorSubject<TodoItem[]> {
    return this.items;
  }

  toggleStatusItem(item: TodoItem): boolean {
    const currentItem = this.items.value.find((element) => {
      return element.id === item.id;
    });
    return currentItem.status = !currentItem.status;
  }
}
