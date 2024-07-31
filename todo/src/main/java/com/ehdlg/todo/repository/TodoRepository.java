package com.ehdlg.todo.repository;

import org.springframework.data.repository.CrudRepository;

import com.ehdlg.todo.model.Todo;

public interface TodoRepository extends CrudRepository<Todo, Long> {
}
