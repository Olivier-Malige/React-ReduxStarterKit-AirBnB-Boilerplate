import { configureStore } from "@reduxjs/toolkit";
import sliceModel from "./reducers/model/model.slice";

// See https://redux-toolkit.js.org/api/configureStore
const store = configureStore({
  reducer: { sliceModel },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
