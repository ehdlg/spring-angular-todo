package com.ehdlg.todo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.GenerationType;

@Entity
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(unique = true, nullable = false)
  @NotBlank(message = "The task title is mandatory")
  private String title;

  @Column(nullable = false)
  @NotNull(message = "The task status is mandatory")
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

  public Boolean getIsCompleted() {
    return isCompleted;
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
