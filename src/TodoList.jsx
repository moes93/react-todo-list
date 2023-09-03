import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
    <ul className="list">
      {/* Short circuiting */}
      {todos.length === 0 && "No Todos"}
      {/* Loop through the todos to reder them out */}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
