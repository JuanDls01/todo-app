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
    <div className='w-screen flex flex-col justify-between items-center'>
      <div className='h-screen w-96 flex flex-col m-4'>
        <h1 className='text-6xl font-bold text-white mb-10'>Todo App</h1>
        <TodoAdd onAdd={handleOnAddItem} />
        <div>
          <div>
            <h2 className='text-2xl font-bold text-white border-b-2 mb-2'>
              To do
            </h2>
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
            <h2 className='text-2xl font-bold text-white border-b-2 mb-2'>
              Done
            </h2>
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

      <footer className='flex w-screen text-white py-5 border-t items-center justify-center'>
        <p>
          Created by{" "}
          <a
            href='https://github.com/JuanDls01'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-indigo-400 hover:underline'
          >
            Juan De los Santos
          </a>{" "}
          - Escuelita Crombie
        </p>
      </footer>
    </div>
  );
}

export default App;
