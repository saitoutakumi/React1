import React from "react";

const StatusButton = ({ setTodoList, todoList, todo }) => {
  const clickStatusButton = (todo) => {
    if (todo.status === "作業中") {
      const newTodos = [...todoList];
      todo.status = "完了";
      setTodoList(newTodos);
      console.log("todoList", todoList);
      console.log("newTodos", newTodos);
    } else if (todo.status === "完了") {
      const newTodos = [...todoList];
      todo.status = "作業中";
      setTodoList(newTodos);
      console.log("todoList", todoList);
    }
  };
  return (
    <button onClick={() => clickStatusButton(todo)}>{`${todo.status}`}</button>
  );
};

export default StatusButton;
