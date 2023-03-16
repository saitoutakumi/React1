import React from "react";
import { v4 as uuidv4 } from "uuid";
import StatusButton from "./StatusButton";
import DeleteButton from "./DeleteButton";
import AddTodoList from "./AddTodoList";

const TodoList = ({ todoList, setTodoList, todoText, setTodoText }) => {
  // const [todoList, setTodoList] = useState([]);
  // ↑書くとエラーになる。App.jsで定義されているため。
  // propsでsetTodoListが渡ってきているため、上記を定義しなくてもOK
  //子コンポーネントから親コンポーネントにある値に変更を加えたい時はsetStateをpropsで渡す

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
                <StatusButton
                  setTodoList={setTodoList}
                  todoList={todoList}
                  todo={todo}
                />
                {/* todoList渡すだけではダメなのか？ */}
              </td>
              <td>
                <DeleteButton
                  setTodoList={setTodoList}
                  todoList={todoList}
                  index={index}
                />
                {/* todoList渡すだけではダメなのか？indexも渡す必要があるのか */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddTodoList
        todoList={todoList}
        setTodoList={setTodoList}
        todoText={todoText}
        setTodoText={setTodoText}
      />
    </div>
  );
};
export default TodoList;
