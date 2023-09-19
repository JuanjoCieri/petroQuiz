import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as actions from "./actionsTypes";

export function getUserDetail(id) {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await axios.get(
        `https://petroquiz-back-1qeh-dev.fl0.io/users/getUserDetail/` + id,
        { headers: headers, withCredentials: true }
      );
      dispatch({
        type: actions.GET_USER_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUsersByName(name) {
  return async (dispatch) => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    try {
      const response = await axios.get(
        `https://petroquiz-back-1qeh-dev.fl0.io/users/getUsersByName?name=${name}`,
        { headers: headers, withCredentials: true }
      );
      dispatch({
        type: actions.GET_USERS_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

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

export function postTournamentPoints(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `https://petroquiz-back-1qeh-dev.fl0.io/tournaments/sumPoints`, payload
      );
      dispatch({
        type: actions.POST_TOURNAMENT_POINTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postNewTournament(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://petroquiz-back-1qeh-dev.fl0.io/tournaments/createNewTournament`, payload
      );
      dispatch({
        type: actions.POST_NEW_TOURNAMENT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postJoinTournament(payload) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://petroquiz-back-1qeh-dev.fl0.io/tournaments/joinTournament`, payload
      );
      dispatch({
        type: actions.POST_JOIN_TOURNAMENT,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllTournaments() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://petroquiz-back-1qeh-dev.fl0.io/tournaments/getTournaments`
      );
      dispatch({
        type: actions.GET_ALL_TOURNAMENTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getTournamentDetail(id) {
  return async (dispatch) => {
    try {
      console.log(id, "ID")
      const response = await axios.get(
        `https://petroquiz-back-1qeh-dev.fl0.io/tournaments/getTournamentDetail/${id}`,
      );
      dispatch({
        type: actions.GET_TOURNAMENT_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setCurrentTournament(payload) {
  return {
    type: actions.SET_CURRENT_TOURNAMENT,
    payload,
  };
}

export function clearState(payload) {
  return {
    type: actions.CLEAR_STATE,
    payload,
  };
}

export function clearStateUserDetail(payload) {
  return {
    type: actions.CLEAR_STATE_USER_DETAIL,
    payload,
  };
}