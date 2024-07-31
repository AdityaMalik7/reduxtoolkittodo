import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    modifyTodo: (state, action) => {
      const { index, text } = action.payload;
      const todo = state.todos[index];
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, modifyTodo } = todoSlice.actions;

export default todoSlice.reducer;
