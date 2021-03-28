import { Component } from '@angular/core';
import {TodoItem} from '../todo';
import {TodoService} from '../todo.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})
export class TodoListComponent {
  title = 'todo-list';

  newTodoItem: TodoItem = new TodoItem();

  constructor(private todoService: TodoService) {
  }

  addTodo(newItem): void {
    this.todoService.addToList(newItem);
    this.newTodoItem = new TodoItem();
  }

  toggleTodoStatus(todo): void {
    this.todoService.toggleStatusItem(todo);
  }

  deleteTodo(item): void {
    this.todoService.deleteItem(item.id);
  }

  get items(): BehaviorSubject<TodoItem[]> {
    return this.todoService.getAllTodos();
  }
}
