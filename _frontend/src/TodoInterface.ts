export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export interface NewTodoInterface {
  title: string;
  completed: boolean;
}

export interface UpdateTodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
  toggleTodo: (id: string) => void;
  updateTodo: (todo: TodoInterface) => void;
  deleteTodo: (id: string) => void;
}
