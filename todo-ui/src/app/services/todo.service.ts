import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoType } from '../../types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<TodoType[]>(environment.apiUrl);
  }
}
