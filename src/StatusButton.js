import React from "react";

// TodoListコンポーネントから、todoを受け取り、
// ボタンを出力、todoはtodoListの中のタスクであり、そのstatusをボタンに出力している？
const StatusButton = ({ todo }) => {
  return <button>{`${todo.status}`}</button>;
};

export default StatusButton;
