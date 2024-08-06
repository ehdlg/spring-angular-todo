import { HttpErrorResponse } from '@angular/common/http';
import { TODO_FILTERS } from './constants';

export type TodoType = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export interface ErrorReponse extends HttpErrorResponse {
  error: {
    error?: string;
    errors?: string[];
  };
}

export type TodoFilterType = (typeof TODO_FILTERS)[number];
