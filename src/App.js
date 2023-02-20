// import React from "react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todoText, setTodoText] = useState("");
  // 変数todoと変数todoを変更する関数setTodo（）→setTodoText(todoTextをどうするか)
  // 入力された値

  const [addTodoList, setAddTodoList] = useState([]);
  // 変数addTodoと変数addTodoを変更する関数setAddTodo（）→setAddTodoList(addTodoListをどうするか)
  // 表示される値

  const handleChange = (e) => setTodoText(e.target.value);
  //todoTextに初期値(今回の場合空欄という初期値)が設定されていても入力できるようにする。
  // 形で覚えた方が良さそう

  //タスクを追加する関数
  const onClickAdd = () => {
    if (todoText === "") return;
    setAddTodoList([...addTodoList, { comment: todoText, status: "作業中" }]);
    // addTodoListをどうする？→入力されたタスク（オブジェクト）を追加する。todoTextは入力された内容
    // ？const allTodo = setAddTodoList([...addTodoList, newTodo]);
    setTodoText("");

    // todoTextを白紙にする→setTodoText(TodoTextをどうするか)
  };

  const [deleteTodoList, setDeleteTodoList] = useState([]);
  const clickDeleteButton = (todo, index) => {
    setDeleteTodoList(addTodoList.splice(index, 1));
    // 選択したタスクだけ配列deleteTodoListに格納
    //setAddTodoList(addTodoList.splice(index, 1));
    // ↑選択したタスク以外がaddTodoListに格納されていた
    console.log("addTodoList", addTodoList);
    console.log("todo", todo);
    console.log("index", index);
    console.log(deleteTodoList);
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
            // ここの記述Qiita参照したもっと深掘り理解したい
            // ？allTodo.map..じゃだめ？
            <tr key={uuidv4()}>
              <td>{`${index + 1}`}</td>
              <td>{`${todo.comment}`}</td>
              <td>
                <button>{`${todo.status}`}</button>
              </td>
              <td>
                <button onClick={() => clickDeleteButton(todo, index)}>
                  {/* addTodoListのtodoとindexを渡している */}
                  {/* イベントハンドラで引数がある場合()=>関数(引数)の記載が必要 */}
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>新規タスクの追加</h2>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={() => onClickAdd()}>追加</button>
    </div>
  );
};

export default App;
