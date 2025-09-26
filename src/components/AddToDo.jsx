import { useToDo } from "../contexts/ToDoContext";

const AddToDo = () => {
  const { toDo, errorMessage, setNewTodo, addToDo, clearToDo } = useToDo();
  console.log("State : ", toDo);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toDo.trim()) return alert("Please enter a to-do item");

    if (errorMessage.trim()) alert("This task already exists!");
    else addToDo(toDo);

    clearToDo();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="todo"
        value={toDo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to-do"
        className="flex-1 border rounded px-2 py-1 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddToDo;
