function Header({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddTodo(form.todo.value);
    form.reset();
  }

  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
          id="todo"
          name="todo"
          type="text"
          className="input"
          placeholder="Your Todo..."
          required
        />
        <button className="addButton" type="submit">
          {" "}
          Add{" "}
        </button>
      </form>
    </header>
  );
}

export default Header;
