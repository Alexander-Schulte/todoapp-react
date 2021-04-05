function ToDo({ name, isDone, onToggleComplete, onDelete }) {
  function handleToggleClick() {
    onToggleComplete(name);
  }

  function handleDeleteClick() {
    onDelete(name);
  }

  const classForComplete = isDone ? "Todo--complete" : "Todo--pending";

  return (
    <section className={`todoList ${classForComplete}`}>
      <button className="Todo--delete" onClick={handleDeleteClick}>
        x
      </button>
      <p> {name} </p>
      <button onClick={handleToggleClick}>
        {isDone ? "Completed" : "Pending"}
      </button>
    </section>
  );
}

export default ToDo;
