import { HttpErrorResponse } from '@angular/common/http';

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
