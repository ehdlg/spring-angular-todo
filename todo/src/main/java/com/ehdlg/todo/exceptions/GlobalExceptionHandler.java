package com.ehdlg.todo.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.persistence.EntityNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<?> handleNotFound(EntityNotFoundException e) {
    ErrorResponse error = new ErrorResponse(e.getMessage());

    return new ResponseEntity<ErrorResponse>(error, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(DataIntegrityViolationException.class)
  public ResponseEntity<?> handleDIV(DataIntegrityViolationException e) {
    ErrorResponse error = new ErrorResponse(e.getMessage());

    return new ResponseEntity<ErrorResponse>(error, HttpStatus.CONFLICT);

  }

}
