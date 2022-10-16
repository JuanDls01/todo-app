import { useState } from "react";
import "./App.css";
import { TodoAdd, TodoItem } from "./components";
import { TodoProps } from "./models";

function App() {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);

  const handleOnAddItem = (text: string) => {
    setTodoList((prev) => {
      return [...prev, { text: text, done: false }];
    });
  };

  const handleOnChangeDone = (index: number, value: boolean) => {
    todoList[index].done = value;
    setTodoList([...todoList]);
  };

  return (
    <div className='h-screen w-96 flex flex-col m-4'>
      <h1 className='text-6xl font-bold text-white mb-10'>Todo App</h1>
      <TodoAdd onAdd={handleOnAddItem} />
      <div className='text-2xl font-bold text-white w-80'>
        <div>
          <h2>To do:</h2>
          <div className='border-2 border-gray-600 bg-gray-700 rounded'>
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
          <h2>Done:</h2>
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
