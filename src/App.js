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
      {/* ↑↑TodoList.js内に記載された内容がここに戻ってきて表示される */}
      {/* 子コンポーネントから親コンポーネントにある値に変更を加えたい時はsetStateをpropsで渡す */}
      <h2>新規タスクの追加</h2>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={() => onClickAdd()}>追加</button>
    </div>
  );
};

export default App;
