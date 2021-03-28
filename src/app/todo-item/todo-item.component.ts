import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TodoItem} from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Input() index: number;
  @Output() delete = new EventEmitter<TodoItem>();
  @Output() statusChange = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(item): void {
    this.delete.emit(item);
  }

  toggleTodoStatus(item): void {
    this.statusChange.emit(item);
  }
}
