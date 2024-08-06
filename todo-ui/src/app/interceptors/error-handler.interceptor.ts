import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, EMPTY } from 'rxjs';
import { ErrorReponse } from '../../types';
import { inject } from '@angular/core';
import { ErrorHandlerService } from '../services/error-handler.service';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlerService = inject(ErrorHandlerService);

  if (req.method != 'GET') errorHandlerService.clearErrors();

  return next(req).pipe(
    catchError((error: ErrorReponse) => {
      let errors: string[] = [];

      switch (error.status) {
        case 400:
          errors = error.error.errors as string[];
          break;

        case 500:
          errors.push('Could not connect to the database');
          break;

        default:
          errors.push(error.error.error as string);
      }

      errorHandlerService.setErrors(errors);
      return EMPTY;
    })
  );
};
