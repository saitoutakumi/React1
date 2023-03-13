import { click } from "@testing-library/user-event/dist/click";
import React from "react";

const clickDeleteBUtton = (todoList, index) => {
  const newTodos = [...todoList];
  newTodos.splice(index, 1);
  //   setTodoList(newTodos);
  console.log(todoList);
  console.log(newTodos);
};

const DeleteButton = ({ todoList }) => {
  return <button onClick={() => clickDeleteBUtton(todoList)}>削除</button>;
};

export default DeleteButton;
