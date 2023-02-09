import { useState, useRef } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  let num = 0;

  // タスクを追加する関数
  const handleAddTodo = () => {
    console.log(todoNameRef);
    setTodos((beforeTasks) => {
      return [...beforeTasks, { key: uuidv4(), task: task, completed: false }];
      // ここの中にID:〇〇を記載する？？
    });
    todoNameRef.current.value = null;
    // タスクを追加したらテキストボックスを空白にする？
  };

  return (
    <div>
      <h1>Todoリスト</h1>
      <label>
        <input type="radio" />
        すべて
      </label>
      <label>
        <input type="radio" />
        作業中
      </label>
      <label>
        <input type="radio" />
        完了
      </label>
      <TodoList todos={todos} />
      <h2>新規タスクの追加</h2>
      <input type="text" ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>追加</button>
    </div>
  );
}

export default App;
