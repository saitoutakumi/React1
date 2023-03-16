import React from "react";

const AddTodoList = ({ todoList, setTodoList, todoText, setTodoText }) => {
  const handleChange = (e) => setTodoText(e.target.value);
  // //タスクを追加する関数
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todoList, { comment: todoText, status: "作業中" }];
    setTodoList(newTodos);
    setTodoText("");
  };

  return (
    <div>
      <h2>新規タスクの追加</h2>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={() => onClickAdd()}>追加</button>
    </div>
  );
};

export default AddTodoList;
