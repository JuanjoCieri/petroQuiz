import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as actions from "./actionsTypes";

export function getLoggedUser(id) {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await axios.get(
        `https://petroquiz-back-1qeh-dev.fl0.io/users/getLoggedUser/` + id,
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
        `https://petroquiz-back-1qeh-dev.fl0.io/users/topPlayers`
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

export function postAuthenticateWithGoogle(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://petroquiz-back-1qeh-dev.fl0.io/users/authenticateWithGoogle`, payload
      );
      const id = response?.data.id
      await AsyncStorage.setItem("@userId", id)
      dispatch({
        type: actions.POST_AUTHENTICATE_WITH_GOOGLE,
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
        `https://petroquiz-back-1qeh-dev.fl0.io/questions/getRandomQuestion/` + id,
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
        `https://petroquiz-back-1qeh-dev.fl0.io/users/savePoints`, payload
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

export function clearState(payload) {
  return {
    type: actions.CLEAR_STATE,
    payload,
  };
}