import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = configureStore(
  { reducer: rootReducer },
  compose(
    applyMiddleware(thunk),
  )
);

export default store;