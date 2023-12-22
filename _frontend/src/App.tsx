import { useState, useEffect } from "react";
import Todo from "./Todo";
import {
  fetchTodosAPI,
  createTodoAPI,
  updateTodoAPI,
  deleteTodoAPI,
} from "./Api";
import { TodoInterface, NewTodoInterface } from "./TodoInterface";

function App() {
  const [todos, setTodos] = useState<
    Array<{ id: string; title: string; completed: boolean }>
  >([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // 登録済みのtodoを全て取得
  useEffect(() => {
    fetchTodosAPI(setTodos);
  }, []);

  const addTodo = async (): Promise<void> => {
    if (newTodo.trim() !== "") {
      const todo: NewTodoInterface = {
        title: newTodo,
        completed: false,
      };
      await createTodoAPI(todo);
      await fetchTodosAPI(setTodos);
      setNewTodo("");
    } else {
      console.error("ValidationError: addItem must not be empty.");
    }
  };

  const updateTodo = async (todo: TodoInterface): Promise<void> => {
    const userInput: string =
      prompt(`Update Item: ${todo.title}`, todo.title) ?? "";
    if (userInput !== "") {
      const updateTodoItem: TodoInterface = {
        id: todo.id,
        title: userInput,
        completed: todo.completed,
      };
      await updateTodoAPI(updateTodoItem);
      await fetchTodosAPI(setTodos);
    } else {
      console.error("ValidationError: updateItem must not be empty.");
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    await deleteTodoAPI(id);
    await fetchTodosAPI(setTodos);
    console.log(`Succeed to delete todo.`);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary ms-3"
            type="button"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
