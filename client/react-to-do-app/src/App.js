import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1> To - Do Application </h1>
      <TodoList />
    </div>
  );
}

export default App;
