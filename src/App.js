import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <h1>TodoList</h1>
      <input type="radio" />
      すべて
      <input type="radio" />
      作業中
      <input type="radio" />
      完了
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        todoText={todoText}
        setTodoText={setTodoText}
      />
      {/* ↑↑TodoList.js内に記載された内容がここに戻ってきて表示される */}
      {/* 子コンポーネントから親コンポーネントにある値に変更を加えたい時はsetStateをpropsで渡す */}
      {/* {/* <h2>新規タスクの追加</h2> */}
    </div>
  );
};

export default App;
