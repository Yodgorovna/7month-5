import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import todo from "./toDo";

export const store = configureStore({
  reducer: {
    counter,
    todo,
  },
});
