import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolio";

const store = configureStore({
  reducer: portfolioReducer,
});

export default store;
