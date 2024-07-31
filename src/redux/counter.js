import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  list: [],
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.count = action.payload;
    },
  },
});

export default counter.reducer;

export const { setValue } = counter.actions;
