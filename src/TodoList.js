import React from "react";
import { v4 as uuidv4 } from "uuid";
// import StatusButton from "./StatusButton";
// import DeleteButton from "./DeleteButton";

const TodoList = ({ todoList, setTodoList }) => {
  // const [todoList, setTodoList] = useState([]);
  // ↑書くとエラーになる。App.jsで定義されているため。
  // propsでsetTodoListが渡ってきているため、上記を定義しなくてもOK

  // 削除ボタン
  const clickDeleteButton = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
    //子コンポーネントから親コンポーネントにある値に変更を加えたい時はsetStateをpropsで渡す
    console.log("todoList", todoList);
    console.log("newTodos", newTodos);
    console.log("index", index);
  };

  //作業中ボタン
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
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>コメント</td>
            <td>状態</td>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => (
            <tr key={uuidv4()}>
              <td>{`${index + 1}`}</td>
              <td>{`${todo.comment}`}</td>
              <td>
                <button
                  onClick={() => clickStatusButton(todo)}
                >{`${todo.status}`}</button>
              </td>
              <td>
                <button onClick={() => clickDeleteButton(index)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
