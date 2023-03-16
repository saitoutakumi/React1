import React from "react";

const DeleteButton = ({ setTodoList, todoList, index }) => {
  const clickDeleteButton = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
    console.log("todoList", todoList);
    console.log("newTodos", newTodos);
    console.log("index", index);
  };

  return <button onClick={() => clickDeleteButton(index)}>削除</button>;
};

export default DeleteButton;
