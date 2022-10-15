import { useState } from "react";
import "./App.css";
import { TodoAdd, TodoItem } from "./components";
import { TodoProps } from "./models";

function App() {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  console.log("cargue");

  const handleOnAddItem = (text: string) => {
    setTodoList((prev) => {
      return [...prev, { text: text, done: false }];
    });
    console.log(todoList);
  };

  const handleOnChangeDone = (index: number, value: boolean) => {
    console.log(todoList);
    todoList[index].done = value;
    setTodoList([...todoList]);
  };

  return (
    <div className='App'>
      <h1>Todos List</h1>
      <TodoAdd onAdd={handleOnAddItem} />
      <div>
        <div>
          <h2>To do:</h2>
          <div>
            {todoList.map(
              (todo, index) =>
                !todo.done && (
                  <TodoItem
                    key={index}
                    id={index}
                    text={todo.text}
                    done={todo.done}
                    onChange={handleOnChangeDone}
                  />
                )
            )}
          </div>
        </div>
        <div>
          <h2>Done</h2>
          <div>
            {todoList.map((todo, index) => {
              return (
                todo.done && (
                  <TodoItem
                    key={index}
                    id={index}
                    text={todo.text}
                    done={todo.done}
                    onChange={handleOnChangeDone}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
