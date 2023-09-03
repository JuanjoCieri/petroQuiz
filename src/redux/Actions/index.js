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

export function getLeaderboardRank() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users/topPlayers`
      );
      dispatch({
        type: actions.GET_LEADERBOARD_RANK,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getRandomQuestion(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/questions/getRandomQuestion/` + id,
      );
      dispatch({
        type: actions.GET_RANDOM_QUESTION,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postGamePoints(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/users/savePoints`, payload
      );
      dispatch({
        type: actions.POST_GAME_POINTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}