import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (errors$ | async; as errors) { @if(errors.length > 0){
    <div
      class="w-full relative bg-red-200 font-semibold flex flex-col gap-4 p-4 rounded"
    >
      <button
        type="button"
        (click)="clearErrors()"
        class="absolute top-2 right-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-slate-800"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h3 class="text-red-500 text-xl font-bold">Errors</h3>
      <ul>
        @for (error of errors; track error) {
        <li class="text-red-400 text-lg">{{ error }}</li>
        }
      </ul>
    </div>
    } }
  `,
})
export class ErrorComponent {
  constructor(private errorService: ErrorHandlerService) {}
  public errors$: Observable<string[] | null> = this.errorService.errors$;

  clearErrors() {
    this.errorService.clearErrors();
  }
}
