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
      class="max-w-[800px] dark:bg-slate-800 rounded bg-slate-50 border border-slate-100 dark:border-slate-700 mx-auto shadow-lg transition ease-in duration-200"
    >
      <ul
        class="w-full flex flex-col gap-2 m-0 text-slate-700 dark:text-slate-300"
      >
        @if (todos$ | async; as todos) { @if(todos.length > 0){ @for (todo of
        todos; track todo.id) {
        <app-todo-item [todo]="todo" />
        } }
        <li
          class="flex md:grid flex-col gap-4 items-center md:grid-cols-3 w-full p-4"
        >
          <span class="">{{ getItemsLeft(todos) }} </span>
          <div class="flex gap-4 justify-center text-center ">
            @for(filter of filters; track filter){
            <button
              [class]="getFilterClass(filter)"
              type="button"
              (click)="updateFilter(filter)"
            >
              {{ filter }}
            </button>
            }
          </div>

          <button (click)="clearCompleted()" type="button" class="text-end">
            Clear completed
          </button>
        </li>
        }
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

  clearCompleted() {
    this.service.clearCompleted();
  }

  getFilterClass(filter: TodoFilterType) {
    let baseClass = 'capitalize  font-bold  transition ease-in duration-200';
    const currentFilter = this.service.getCurrentFilter() === filter;

    const notCurrentFilterClass = `${baseClass} text-slate-700 hover:text-purple-300`;
    const currentFilterClass = `${baseClass} text-purple-500`;

    if (!currentFilter) return notCurrentFilterClass;

    return currentFilterClass;
  }

  getItemsLeft(todos: TodoType[]) {
    let count = 1;

    return count;
  }
}
