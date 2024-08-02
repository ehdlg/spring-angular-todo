package com.ehdlg.todo.exceptions;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ErrorResponse> handleValidationExceptions(
      MethodArgumentNotValidException ex) {
    List<String> errors = new ArrayList<>();
    ex.getBindingResult().getAllErrors().forEach((error) -> {
      String errorMessage = error.getDefaultMessage();
      errors.add(errorMessage);
    });

    ErrorResponse errorResponse = new ErrorResponse(errors);

    return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.BAD_REQUEST);
  }

}
