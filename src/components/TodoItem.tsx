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
    <div>
      <input type='checkbox' checked={done} onChange={handleOnClick} />
      <p>{text}</p>
    </div>
  );
};
export default TodoItem;
