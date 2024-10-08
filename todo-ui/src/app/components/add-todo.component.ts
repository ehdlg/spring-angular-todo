import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';
import { TodoType } from '../../types';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (submit)="addTodo()" class="w-full">
      <input
        [(ngModel)]="newTodo"
        type="text"
        id="word"
        class="w-full bg-slate-50 dark:bg-slate-800 dark:text-slate-200 p-4 rounded text-xl outline-none focus:shadow-md transition ease-in"
        [ngModelOptions]="{ standalone: true }"
        placeholder="Create a new todo..."
      />
    </form>
  `,
})
export class AddTodoComponent {
  public newTodo: string = '';
  constructor(private service: TodoService) {}

  public addTodo() {
    const newTodo: Partial<TodoType> = { title: this.newTodo.trim() };
    this.service.create(newTodo).subscribe();
    this.newTodo = '';
  }
}
