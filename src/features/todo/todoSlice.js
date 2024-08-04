import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "asfdasdfas-345345",
      text: "Hello world",
      deadline: new Date(Date.now()),
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      console.log(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    modifyTodo: (state, action) => {
      const { index, text } = action.payload;
      state.todos = state.todos.map((i) =>
        i.id === index ? { ...i, text } : i
      );
    },
  },
});

export const { addTodo, removeTodo, modifyTodo } = todoSlice.actions;

export default todoSlice.reducer;
