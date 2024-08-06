import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoFilterType, TodoType } from '../../types';
import { AsyncPipe } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from './todo-item.component';
import { TODO_FILTERS } from '../../constants';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AsyncPipe, TodoItemComponent],
  template: `
    <div
      class="max-w-[800px] rounded bg-slate-50 border border-slate-100 mx-auto"
    >
      <ul class="w-full flex flex-col gap-2 m-0 text-slate-700">
        @if (todos$ | async; as todos) { @if(todos.length > 0){ @for (todo of
        todos; track todo.id) {
        <app-todo-item [todo]="todo" />
        } }@else {
        <li class="text-center text-xl p-4 font-bold border-b border-slate-100">
          There are no todos
        </li>
        } }
        <li
          class="flex md:flex-row flex-col gap-4 items-center md:justify-between w-full p-2"
        >
          <div>x items left</div>
          <div class="flex gap-4">
            @for(filter of filters; track filter){
            <button
              type="button"
              class="px-4 py-2 rounded outline-none bg-slate-200 shadow-sm capitalize"
              (click)="updateFilter(filter)"
            >
              {{ filter }}
            </button>
            }
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
  constructor(private service: TodoService) {}
  public todos$: Observable<TodoType[]> = this.service.todos$;
  readonly filters = TODO_FILTERS;

  ngOnInit(): void {
    this.service.loadTodos();
  }

  updateFilter(newFilter: TodoFilterType) {
    this.service.updateFilter(newFilter);
  }
}
