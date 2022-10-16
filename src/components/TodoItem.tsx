import React from "react";
import { TodoProps } from "../models";

type ItemTodoProps = {
  id: number;
  onChange: (index: number, value: boolean) => void;
} & TodoProps;

const TodoItem: React.FC<ItemTodoProps> = ({ text, id, done, onChange }) => {
  const handleOnClick = () => {
    onChange?.(id, !done);
  };
  return (
    <div className='h-12 bg-[#363636] rounded flex items-center p-3 mb-2'>
      <input
        className='bg-[#363636] border border-white rounded-lg mr-4 appearence-none'
        type='checkbox'
        checked={done}
        onChange={handleOnClick}
      />
      <p className={`text-lg text-white ${done && "italic line-through"}`}>
        {text}
      </p>
    </div>
  );
};
export default TodoItem;
