import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = configureStore(
  { reducer: rootReducer },
  compose(
    applyMiddleware(thunk),
  )
);