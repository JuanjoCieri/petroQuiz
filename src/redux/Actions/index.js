import axios from "axios";

import * as actions from "./actionsTypes";

export function getLoggedUser() {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await axios.get(
        `http://localhost:3000/users/getLoggedUser`,
        { headers: headers, withCredentials: true }
      );
      dispatch({
        type: actions.GET_LOGGED_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRandomQuestion(id) {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await axios.get(
        `http://localhost:3000/questions/getRandomQuestion/` + id,
        { headers: headers, withCredentials: true }
      );
      dispatch({
        type: actions.GET_LOGGED_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}