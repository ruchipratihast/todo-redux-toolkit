import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: 'todo', 
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((_, i) => i !== action.payload);
    },
    clearTodo: (state) => {
      state.todos = [];
    }
  }
});

export const { addTodo, deleteTodo, clearTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
