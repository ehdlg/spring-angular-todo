import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorReponse } from '../../types';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: ErrorReponse) => {
      let errorMessage = 'An error occured';

      if (error.status === 400) {
        errorMessage = (error.error.errors as string[]).join('|');
      } else {
        errorMessage = error.error.error as string;
      }

      return throwError(() => new Error(errorMessage));
    })
  );
};
