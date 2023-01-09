import { configureStore, combineReducers } from "@reduxjs/toolkit";
import test from "./actions/test";
import modal from "./actions/modal";

const reducers = combineReducers({
  test: test,
  modal: modal,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
