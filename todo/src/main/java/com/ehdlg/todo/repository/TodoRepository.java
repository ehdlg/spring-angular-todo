package com.ehdlg.todo.repository;

import org.springframework.data.repository.CrudRepository;

import com.ehdlg.todo.model.Todo;
import java.util.List;

public interface TodoRepository extends CrudRepository<Todo, Long> {
  public Todo findByTitle(String title);

  public List<Todo> findByIsCompleted(Boolean isCompleted);

}
