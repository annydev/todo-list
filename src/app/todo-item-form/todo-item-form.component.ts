import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {TodoItem} from '../todo';

@Component({
  selector: 'app-todo-item-form',
  templateUrl: './todo-item-form.component.html',
  styleUrls: ['./todo-item-form.component.scss']
})
export class TodoItemFormComponent implements OnInit {
  @Output() submitValue = new EventEmitter<TodoItem>();

  constructor() { }

  itemForm = new FormGroup({
    title: new FormControl(''),
  });

  onSubmit(): void {
    this.submitValue.emit(this.itemForm.value);
    this.itemForm.reset();
  }

  ngOnInit(): void {
  }

}
