import { useToDo } from "../contexts/ToDoContext";

const ToDoItem = ({ todo }) => {
  const { toggleToDo } = useToDo();
  return (
    <li className="flex items-center mb-2">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleToDo(todo.id)}
          className="mr-2"
        />
        {todo.text}
      </label>
    </li>
  );
};

export default ToDoItem;
