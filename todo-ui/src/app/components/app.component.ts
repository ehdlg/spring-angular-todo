import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AddTodoComponent } from './add-todo.component';
import { AsyncPipe } from '@angular/common';
import { ErrorComponent } from './error.component';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    AddTodoComponent,
    AsyncPipe,
    ErrorComponent,
    HeaderComponent,
  ],
  template: `
    <main class="max-w-[800px] mx-auto mt-20 p-4 flex flex-col gap-6">
      <app-header />
      <app-add-todo />
      <app-error />
      <app-todo />
    </main>

    <router-outlet />
  `,
})
export class AppComponent {}
