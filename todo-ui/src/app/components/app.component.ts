import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { TodoComponent } from './todo.component';
import { TodoType } from '../../types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent],
  template: `
    <main class="max-w-[800px] mx-auto mt-20 p-4">
      <h1 class="text-4xl m-4">TODO</h1>
      <app-todo />
    </main>

    <router-outlet />
  `,
})
export class AppComponent {}
