import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToDoContextProvider from "./contexts/ToDoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </StrictMode>
);
