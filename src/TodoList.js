import React from "react";
import StatusButton from "./StatusButton";
import DeleteButton from "./DeleteButton";
import { v4 as uuidv4 } from "uuid";

const TodoList = ({ todoList }) => {
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
                <StatusButton todo={todo} />
                {/* StatusButtonコンポーネントにtodoList内のtodoを「todo」として渡している？？ */}
              </td>
              <td>
                <DeleteButton todoList={todoList} />
                {/* DeleteButtonコンポーネントに配列todoListを「todoList」として渡している？？ */}
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
