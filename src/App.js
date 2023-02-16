// import React from "react";
import React, { useState } from "react";

const App = () => {
  const [todoText, setTodoText] = useState([]);
  // 変数todoと変数todoを変更する関数setTodo→setTodoText(todoTextをどうするか)
  // 入力する値

  const [addTodoList, setAddTodoList] = useState([]);
  // 変数addTodoと変数addTodoを変更する関数setAddTodo→setAddTodoList(addTodoListをどうするか)
  // 表示される値

  const handleChange = (e) => setTodoText(e.target.value);
  //テキストを初期値が設定されていても入力できるようにする。
  // todoTextの初期値nullを変更できるってこと？

  //タスクを追加する関数
  const onClickAdd = () => {
    const newTodo = {
      comment: todoText,
      status: "作業中",
    };
    setAddTodoList([...addTodoList, newTodo]);
    // addTodoListをどうする？→addTodoListとnewTodoを合体させる
    // 聞きたい①const allTodo = setAddTodoList([...addTodoList, newTodo]);

    setTodoText("");
    // todoTextを白紙にする→setTodoText(TodoTextをどうするか)
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
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>コメント</td>
            <td>状態</td>
          </tr>
        </thead>
        <tbody>
          {addTodoList.map((todo, index) => (
            // 聞きたい①allTodo.map..じゃだめ？
            <tr>
              <td>{index + 1}</td>
              <td>{todo.comment}</td>
              <td>
                <button>{todo.status}</button>
              </td>
              <td>
                <button>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>新規タスクの追加</h2>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};

export default App;
