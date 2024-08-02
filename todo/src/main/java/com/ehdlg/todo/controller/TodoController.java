package com.ehdlg.todo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ehdlg.todo.model.Todo;
import com.ehdlg.todo.repository.TodoRepository;

import jakarta.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

  private final TodoRepository todoRepository;

  TodoController(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  @GetMapping("")
  public Iterable<Todo> getAll() {
    return this.todoRepository.findAll();
  }

  @GetMapping("{id}")
  public ResponseEntity<Todo> getOne(@PathVariable Long id) {
    Todo newTodo = todoRepository.findById(id)
        .orElseThrow(() -> new EntityNotFoundException(String.format("Task %d not found", id)));

    return ResponseEntity.ok(newTodo);
  }

  @PostMapping("")
  public ResponseEntity<Todo> create(@RequestBody Todo todo) {
    try {
      Todo newTodo = todoRepository.save(todo);

      return ResponseEntity.status(201).body(newTodo);
    } catch (Exception e) {
      throw new EntityNotFoundException("There is already a task with that title");
    }

  }

  @DeleteMapping("{id}")
  public ResponseEntity<String> delete(@PathVariable Long id) {
    try {
      todoRepository.deleteById(id);

      return new ResponseEntity<String>("Succesfully deleted the task", HttpStatus.OK);
    } catch (Exception e) {
      throw new EntityNotFoundException("Task with ID: " + id + " not found");
    }
  }

  @PutMapping("{id}")
  public ResponseEntity<Todo> update(@PathVariable Long id, @RequestBody Todo updatedFields) {
    return todoRepository.findById(id)
        .map(todo -> {
          todo.setCompleted(updatedFields.getIsCompleted());
          todo.setTitle(updatedFields.getTitle());

          Todo updatedTodo = todoRepository.save(todo);

          return ResponseEntity.ok(updatedTodo);

        }).orElseThrow(() -> new EntityNotFoundException(String.format("Task %d not found", id)));

  }

}
