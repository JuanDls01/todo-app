import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type todoProps = {
  text: string;
  done: boolean;
};

function App() {
  const [todoList, setTodoList] = useState<todoProps>();

  const handleOnAddItem = () => {
    console.log("addItem");
  };
  return (
    <div className='App'>
      <h1>Todos List</h1>
      {/* Componente Add todo */}
      <div>
        <div>
          <h2>To do:</h2>
        </div>
        <div>
          <h2>Done</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
