import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (submit)="addTodo()" class="w-full">
      <input
        [(ngModel)]="newTodo"
        type="text"
        id="word"
        class="w-full bg-slate-50 p-4 rounded text-xl "
        [ngModelOptions]="{ standalone: true }"
      />
    </form>
  `,
})
export class AddTodoComponent {
  public newTodo: string = '';
  constructor(private service: TodoService) {}

  //TODO handle data
  public addTodo() {
    this.service.create({ title: this.newTodo }).subscribe((data) => {
      console.log(data);
    });
  }
}
