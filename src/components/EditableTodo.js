import React, { useState } from "react";
import { modifyTodo, removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function EditableTodo({ todo }) {
  const [isEdititing, setIsEdititing] = useState(false);
  const dispatch = useDispatch();

  const deadline = new Date(todo.deadline);

  return (
    <li key={todo.id}>
      {isEdititing ? (
        <input
          type="text"
          value={todo.text}
          onChange={(e) =>
            dispatch(modifyTodo({ index: todo.id, text: e.target.value }))
          }
        />
      ) : (
        <div style={{ color: deadline < new Date(Date.now()) ? "red" : "" }}>
          {todo.text}
        </div>
      )}
      <button onClick={() => dispatch(removeTodo(todo.id))}>remove</button>

      <button onClick={() => setIsEdititing((v) => !v)}>
        {isEdititing ? "done" : "modify"}
      </button>
    </li>
  );
}
