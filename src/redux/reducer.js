import * as actions from "./Actions/actionsTypes.js";

const initialState = {
  loggedUser: [],
  randomQuestion: [],
};

export default function rootReducer(state = initialState, payload) {
  switch (payload.type) {
    case actions.GET_LOGGED_USER:
      return {
        ...state,
        loggedUser: payload.payload,
      };
    case actions.GET_RANDOM_QUESTION:
      return {
        ...state,
        randomQuestion: payload.payload,
      };
    default:
      return state;
  }
}
