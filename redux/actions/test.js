import { createSlice } from "@reduxjs/toolkit";

const test = createSlice({
  name: "test",
  initialState: {
    test: "test",
  },
  reducers: {
    testFunction: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { testFunction } = test.actions;
export default test.reducer;
