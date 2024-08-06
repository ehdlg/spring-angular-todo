import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoFilterType, TodoType } from '../../types';
import { environment } from '../../environments/environment';
import { BehaviorSubject, catchError, EMPTY, of, tap } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { DEFAULT_TODO_FILTER } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<TodoType[]>([]);
  public filterSubject = new BehaviorSubject<TodoFilterType>(
    DEFAULT_TODO_FILTER
  );

  public todos$ = this.todosSubject.asObservable().pipe(
    catchError((error: Error) => {
      this.errorService.setErrors(error.message.split('|'));
      return EMPTY;
    })
  );

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlerService
  ) {}

  loadTodos() {
    this.http
      .get<TodoType[]>(
        `${environment.apiUrl}?filter=${this.filterSubject.getValue()}`
      )
      .subscribe((todos) => {
        this.todosSubject.next(todos);
      });
  }

  create(data: Partial<TodoType>) {
    return this.http
      .post<TodoType>(environment.apiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(tap(() => this.loadTodos()));
  }

  update(updatedTodo: TodoType) {
    const { id, ...data } = updatedTodo;

    return this.http
      .put<TodoType>(`${environment.apiUrl}/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(tap(() => this.loadTodos()));
  }

  updateFilter(newFilter: TodoFilterType) {
    this.filterSubject.next(newFilter);
    this.loadTodos();
  }
}
