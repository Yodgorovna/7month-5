import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
    editItem: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id == action.payload.id ? action.payload : item
        ),
      };
    },
  },
});

export default todoReducer.reducer;

export const { add, editItem } = todoReducer.actions;
