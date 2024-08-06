import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddTodo() {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      text: input,
      deadline: date,
    };
    console.log({ todo });
    dispatch(addTodo(todo));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div className="input input_pad">
        <input
          className="input_input border"
          type="text"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="button border color">
          Add Todo
        </button>
      </div>
      <div className="input date">
        <input
          className="border color"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </form>
  );
}

export default AddTodo;
