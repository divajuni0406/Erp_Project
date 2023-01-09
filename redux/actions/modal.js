import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    isNavClick: false,
  },
  reducers: {
    navClick: (state, action) => {
      state.isNavClick = action.payload;
    },
  },
});

export const { navClick } = modal.actions;
export default modal.reducer;
