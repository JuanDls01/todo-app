import React, { useState } from "react";

type TodoAddProps = {
  onAdd?: (value: string) => void;
};

const TodoAdd: React.FC<TodoAddProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnAddItem = () => {
    if (inputValue.trim() === "") return;
    onAdd?.(inputValue);
    setInputValue("");
  };
  return (
    <div className='w-full mb-6 flex content-between justify-between'>
      <input
        className='h-10 w-80 p-2 flex items-center justify-center text-white rounded focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 bg-gray-900 border border-gray-800 placeholder:italic placeholder:text-slate-600'
        placeholder='Write and press + to add a to do'
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleOnAddItem()}
      />
      <button
        className='h-10 w-10 bg-indigo-500 flex justify-center items-center rounded hover:bg-indigo-400 active:ring active:ring-indigo-600 text-white '
        onClick={handleOnAddItem}
      >
        +
      </button>
    </div>
  );
};

export default TodoAdd;
