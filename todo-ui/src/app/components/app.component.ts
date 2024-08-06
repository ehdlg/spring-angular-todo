import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AddTodoComponent } from './add-todo.component';
import { AsyncPipe } from '@angular/common';
import { ErrorComponent } from './error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoComponent,
    AddTodoComponent,
    AsyncPipe,
    ErrorComponent,
  ],
  template: `
    <main class="max-w-[800px] mx-auto mt-20 p-4 flex flex-col gap-6">
      <h1
        class="text-5xl m-4 tracking-widest bg-gradient-to-tr from-purple-400  to-purple-700 inline-block text-transparent bg-clip-text w-fit"
      >
        TODO
      </h1>
      <app-add-todo />
      <app-error />
      <app-todo />
    </main>

    <router-outlet />
  `,
})
export class AppComponent {}
