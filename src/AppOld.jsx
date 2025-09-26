import { useState } from "react";
import AddToDo from "./components/AddToDo";
import FilterComponent from "./components/FilterComponent";
import ToDoList from "./components/ToDoList";

const App = () => {
  /*const todos = [
    {
      id: 1,
      text: "Learn React",
      completed: false,
    },
    {
      id: 2,
      text: "Learn Tailwind CSS",
      completed: true,
    },
    {
      id: 3,
      text: "Learn Node.js",
      completed: false,
    },
    {
      id: 4,
      text: "Learn Express.js",
      completed: false,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <AddToDo />
      <FilterComponent />
      <ToDoList todos={todos} />
    </div>
  );*/

  const [todos, setTodos] = useState([]);
  localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [filter, setFilter] = useState("all");

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const toDos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todo", JSON.stringify(toDos));
      return toDos;
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "active" && !todo.completed) return true;
    return false;
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <AddToDo setTodos={setTodos} />
      <FilterComponent setFilter={setFilter} />
      <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
