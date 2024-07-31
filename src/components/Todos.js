import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modifyTodo, removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div className="text-white">{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              remove
            </button>
            <button onClick={() => dispatch(modifyTodo(todo.id))}>
              modify
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
