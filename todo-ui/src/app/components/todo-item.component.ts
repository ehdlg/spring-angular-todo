import { Component, Input } from '@angular/core';
import { TodoType } from '../../types';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    <li
      class="border-b border-slate-200 p-6 text-slate-800 dark:text-slate-200 dark:border-slate-700 flex gap-6 items-center"
    >
      <input
        (click)="updateStatus(todo)"
        type="checkbox"
        [id]="todo.id"
        class="w-5 h-5 cursor-pointer appearance-none border border-gray-300  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
        [checked]="todo.isCompleted"
      />
      <label class="text-xl" [htmlFor]="todo.id">{{ todo.title }}</label>
    </li>
  `,
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: TodoType;
  constructor(private service: TodoService) {}

  updateStatus(todo: TodoType) {
    const updatedTodo: TodoType = { ...todo, isCompleted: !todo.isCompleted };

    this.service.update(updatedTodo).subscribe();
  }
}
