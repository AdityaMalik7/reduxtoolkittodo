import React from "react";
import { useSelector } from "react-redux";
import EditableTodo from "./EditableTodo";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <EditableTodo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default Todos;
