package com.ehdlg.todo.model;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;

@Entity
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @NonNull
  private String title;

  @NonNull
  private boolean isCompleted;

  protected Todo() {
  }

  public Todo(String title, boolean isCompleted) {
    this.title = title;
    this.isCompleted = isCompleted;
  }

  public Long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setCompleted(boolean isCompleted) {
    this.isCompleted = isCompleted;
  }
}
