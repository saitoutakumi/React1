import React, { useState } from "react";
import TodoList from "./TodoList";
// import DeleteButton from "./DeleteButton";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleChange = (e) => setTodoText(e.target.value);

  // //タスクを追加する関数
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todoList, { comment: todoText, status: "作業中" }];
    setTodoList(newTodos);
    setTodoText("");
  };

  // // // 削除ボタン
  // const clickDeleteButton = (index) => {
  //   const newTodos = [...todoList];
  //   newTodos.splice(index, 1);
  //   setTodoList(newTodos);
  //   console.log("todoList", todoList);
  //   console.log("newTodos", newTodos);
  // };

  // // // 作業中ボタン
  // const clickStatusButton = (todo, index) => {
  //   if (todo.status === "作業中") {
  //     const newTodos = [...todoList];
  //     todo.status = "完了";
  //     setTodoList(newTodos);
  //     console.log("todoList", todoList);
  //     console.log("newTodos", newTodos);
  //   } else if (todo.status === "完了") {
  //     const newTodos = [...todoList];
  //     todo.status = "作業中";
  //     setTodoList(newTodos);
  //     console.log("todoList", todoList);
  //   }
  // };

  return (
    <div>
      <h1>TodoList</h1>
      <input type="radio" />
      すべて
      <input type="radio" />
      作業中
      <input type="radio" />
      完了
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <h2>新規タスクの追加</h2>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={() => onClickAdd()}>追加</button>
    </div>
  );
};

export default App;
