import React from "react";
import { v4 as uuidv4 } from "uuid";
// import StatusButton from "./StatusButton";
// import DeleteButton from "./DeleteButton";

const TodoList = ({ todoList, setTodoList }) => {
  // const [todoList, setTodoList] = useState([]);

  // // 削除ボタン
  const clickDeleteButton = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    // setTodoList(newTodos);
    console.log("todoList", todoList);
    console.log("newTodos", newTodos);
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
                <button>{`${todo.status}`}</button>
              </td>
              <td>
                <button onClick={() => clickDeleteButton(console.log(index))}>
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;

// const TodoList = (props) => {
//     todoList.map((todo, index) => (
//       <tr key={uuidv4}>
//         <td>{`${index + 1}`}</td>
//         <td>{`${todo.comment}`}</td>
//         <td>
//           <button
//             onClick={() => clickStatusButton(todo, index)}
//           >{`${todo.status}`}</button>
//         </td>
//         <td>
//           <button onClick={() => clickDeleteButton(index)}>削除</button>
//         </td>
//       </tr>
//     ));
//   };
