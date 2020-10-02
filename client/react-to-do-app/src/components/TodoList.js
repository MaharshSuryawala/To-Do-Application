import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    checkInput(todo);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const checkInput = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
  };

  const removeTodo = (id) => {
    const removeTodoOb = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeTodoOb);
  };

  const updateTodo = (todoId, newValue) => {
    checkInput(newValue);
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1> What is your main focus for today? </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
