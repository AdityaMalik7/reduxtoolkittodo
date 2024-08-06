import React from "react";
import { useSelector } from "react-redux";
import EditableTodo from "./EditableTodo";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="input input_pad">
        <h1>Todos</h1>
      </div>
      <div className="input">
        <ul>
          {todos.map((todo) => (
            <EditableTodo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
