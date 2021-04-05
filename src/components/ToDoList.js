import Todo from "./ToDo";

function ToDoList({ todos, onToggleComplete, onDeleteToDo, setFilter }) {
  function renderToDos() {
    return todos.map((todo, index) => {
      return (
        <Todo
          key={todo.name}
          name={todo.name}
          isDone={todo.isDone}
          onToggleComplete={onToggleComplete}
          onDelete={onDeleteToDo}
        />
      );
    });
  }

  function handleAllClick() {
    setFilter("");
  }

  function handleCompleteClick() {
    setFilter(true);
  }

  function handlePendingClick() {
    setFilter(false);
  }

  return (
    <main className="main">
      <div className="filterButton">
        <button onClick={handleAllClick}>All</button>
        <button onClick={handleCompleteClick}>Complete</button>
        <button onClick={handlePendingClick}>Pending</button>
      </div>

      {renderToDos()}
    </main>
  );
}

export default ToDoList;
