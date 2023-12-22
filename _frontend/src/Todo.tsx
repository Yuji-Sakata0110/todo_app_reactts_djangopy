// Todo.tsx
import React from "react";
import { TodoProps } from "./TodoInterface";

const Todo: React.FC<TodoProps> = ({
  todo,
  toggleTodo,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <li className="list-group-item mx-2 d-flex justify-content-between align-items-center">
      <div>
        <input
          className="ms-3"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          className="ms-3"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.title}
        </span>
      </div>
      <div>
        <button className="btn btn-warning" onClick={() => updateTodo(todo)}>
          Update
        </button>
        <button
          className="btn btn-danger ms-3"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
