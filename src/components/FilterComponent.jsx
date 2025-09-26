import { useToDo } from "../contexts/ToDoContext";

const FilterComponent = () => {
  const { filterToDo } = useToDo();

  return (
    <div className="mb-4 flex space-X-2 gap-2">
      <button
        onClick={() => filterToDo("all")}
        className="bg-gray-200 px-3 py-1 rounded cursor-pointer"
      >
        All
      </button>
      <button
        onClick={() => filterToDo("active")}
        className="bg-gray-200 px-3 py-1 rounded cursor-pointer"
      >
        Active
      </button>
      <button
        onClick={() => filterToDo("completed")}
        className="bg-gray-200 px-3 py-1 rounded cursor-pointer"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
