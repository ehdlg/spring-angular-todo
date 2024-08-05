import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  private errorSubject: BehaviorSubject<string[] | null> = new BehaviorSubject<
    string[] | null
  >(null);

  public errors$ = this.errorSubject.asObservable();

  clearErrors() {
    this.errorSubject.next(null);
  }

  setErrors(errors: string[]) {
    this.errorSubject.next(errors);
  }
}
