import React from "react";

export const Todo = ({ todo }) => {
  console.log(todo);

  const taskWork = () => {
    console.log("作業中");
  };

  const taskFinish = () => {
    console.log("完了");
  };

  return (
    <div>
      {todo.key}
      {/* ここにIDを記載する */}
      {todo.task}
      <label>
        <button onClick={taskWork}>作業中</button>
      </label>
      <label>
        <button onClick={taskFinish}> 完了</button>
      </label>
    </div>
  );
};
export default Todo;
