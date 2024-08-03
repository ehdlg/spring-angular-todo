import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoType } from '../../types';
import { AsyncPipe } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from './todo-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AsyncPipe, TodoItemComponent],
  template: `
    <div
      class="max-w-[800px] rounded bg-slate-50 border border-slate-100 mx-auto"
    >
      <ul class="w-full flex flex-col gap-2 m-0 ">
        @if (todos$ | async; as todos) { @if(todos.length > 0){ @for (todo of
        todos; track todo.id) {
        <app-todo-item [todo]="todo" />
        } }@else {
        <li>There are no todos</li>
        } }
        <li
          class="flex md:flex-row flex-col gap-4 items-center md:justify-between w-full p-2"
        >
          <div>x items left</div>
          <div class="flex gap-4">
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </div>

          <div>
            <p>Clear completed</p>
          </div>
        </li>
      </ul>
    </div>
  `,
})
export class TodoComponent implements OnInit {
  public todos$!: Observable<TodoType[]>;
  constructor(private service: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.service.getAll();
  }
}
