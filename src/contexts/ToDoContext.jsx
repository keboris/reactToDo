import { createContext, useContext, useReducer } from "react";

const ToDoContext = createContext();

const todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const initialTodo = {
  lists: todos,
  toDo: "",
  filter: "all",
  errorMessage: "",
};

function reducer(state, action) {
  console.log("State list : ", state.lists);
  switch (action.type) {
    case "NEW_TODO": {
      const local = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
      const exists = local.find((t) => t.text === action.payLoad);

      return {
        ...state,
        toDo: action.payLoad,
        errorMessage: exists ? "This task already exists!" : "",
      };
    }

    case "ADD_TODO": {
      const newState = {
        ...state,
        lists: [
          { id: Date.now(), text: action.payLoad, completed: false },
          ...state.lists,
        ],
        toDo: "",
      };
      localStorage.setItem("todos", JSON.stringify(newState.lists));
      return newState;
    }

    case "CLEAR_TODO":
      return { ...state, toDo: "" };

    case "FILTER_TODO": {
      const filter = action.payLoad;
      console.log("Filter : ", filter);
      return {
        ...state,
        filter,
      };
    }
    case "TOGGLE_TODO": {
      console.log("toggle : ", action.payLoad);
      const updatedLists = state.lists.map((todo) =>
        todo.id === action.payLoad
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedLists));
      return { ...state, lists: updatedLists };
    }
    default:
      throw new Error("Unknow action", action.type);
  }
}

export default function ToDoContextProvider({ children }) {
  const [toDoState, dispatch] = useReducer(reducer, initialTodo);

  function setNewTodo(text) {
    dispatch({ type: "NEW_TODO", payLoad: text });
  }

  function addToDo(text) {
    dispatch({ type: "ADD_TODO", payLoad: text });
  }

  function clearToDo() {
    dispatch({ type: "CLEAR_TODO" });
  }

  function filterToDo(filter) {
    dispatch({ type: "FILTER_TODO", payLoad: filter });
  }
  function toggleToDo(id) {
    dispatch({ type: "TOGGLE_TODO", payLoad: id });
  }

  return (
    <ToDoContext.Provider
      value={{
        todos: toDoState.lists,
        toDo: toDoState.toDo,
        filter: toDoState.filter,
        errorMessage: toDoState.errorMessage,
        setNewTodo,
        addToDo,
        clearToDo,
        filterToDo,
        toggleToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDo() {
  return useContext(ToDoContext);
}
