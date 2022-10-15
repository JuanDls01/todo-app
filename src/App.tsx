import { useState } from "react";
import "./App.css";
import { TodoAdd } from "./components/TodoAdd";
import TodoItem from "./components/TodoItem";

type todoProps = {
  text: string;
  done: boolean;
};

function App() {
  const [todoList, setTodoList] = useState<todoProps[]>([]);

  const handleOnAddItem = (text: string) => {
    setTodoList((prev) => {
      return [...prev, { text: text, done: false }];
    });
    console.log(todoList);
  };
  return (
    <div className='App'>
      <h1>Todos List</h1>
      <TodoAdd onAdd={handleOnAddItem} />
      <div>
        <div>
          <h2>To do:</h2>
          <TodoItem />
        </div>
        <div>
          <h2>Done</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
