import { useState } from "react";
import "./App.css";
import { TodoAdd } from "./components/TodoAdd";

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
      <TodoAdd onAdd={handleOnAddItem} />
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
