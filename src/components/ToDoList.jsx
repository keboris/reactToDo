import { useToDo } from "../contexts/ToDoContext";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const { todos, filter } = useToDo();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "active" && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
