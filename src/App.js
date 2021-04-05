import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList";
/* import ToDo from "./components/ToDo"; */

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  function handleAddTodo(todoName) {
    const newTodos = [
      ...todos,
      {
        name: todoName,
        isDone: false,
      },
    ];
    setTodos(newTodos);
  }

  function handleToggleComplete(name) {
    const newTodos = todos.map((todo) => {
      if (todo.name === name) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  function handleDeleteTodo(name) {
    const newTodos = todos.filter((todo) => todo.name !== name);
    setTodos(newTodos);
  }

  let filterToDo;
  if (filter === true) {
    filterToDo = todos.filter((todo) => todo.isDone === true);
  } else if (filter === false) {
    filterToDo = todos.filter((todo) => todo.isDone === false);
  } else {
    filterToDo = todos;
  }

  return (
    <div className="App">
      <Header onAddTodo={handleAddTodo} />
      <ToDoList
        setFilter={setFilter}
        todos={filterToDo}
        onToggleComplete={handleToggleComplete}
        onDeleteToDo={handleDeleteTodo}
      />
    </div>
  );
}
