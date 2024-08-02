package com.ehdlg.todo.exceptions;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorResponse {
  private String error;
  private List<String> errors;

  public ErrorResponse(String error) {
    this.error = error;
  }

  public ErrorResponse(List<String> errors) {
    this.errors = errors;
  }

  public String getError() {
    return error;
  }

  public List<String> getErrors() {
    return errors;
  }

  public void setError(String error) {
    this.error = error;
  }

  public void setErrors(List<String> errors) {
    this.errors = errors;
  }
}