import { Component, Input } from '@angular/core';
import { TodoType } from '../../types';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    <li class="border-b border-slate-200 p-4 last:border-none list-disc">
      {{ todo.title }}
    </li>
  `,
  styles: ``,
})
export class TodoItemComponent {
  @Input({ required: true }) todo!: TodoType;
}
