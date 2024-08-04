import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoType } from '../../types';
import { environment } from '../../environments/environment';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject = new BehaviorSubject<TodoType[]>([]);
  public todos$ = this.todosSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadTodos() {
    this.http
      .get<TodoType[]>(environment.apiUrl)
      .pipe(
        catchError((error) => {
          return of(error);
        })
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
}
