import * as actions from "./Actions/actionsTypes.js";

const initialState = {
  loggedUser: [],
  searchedUsers: [],
  randomQuestion: [],
  userDetail: [],
  rankingList: [],
};

export default function rootReducer(state = initialState, payload) {
  switch (payload.type) {
    case actions.GET_LOGGED_USER:
      return {
        ...state,
        loggedUser: payload.payload,
      };
      case actions.GET_USERS_BY_NAME:
      return {
        ...state,
        searchedUsers: payload.payload,
      };
    case actions.GET_USER_DETAIL:
      return {
        ...state,
        userDetail: payload.payload,
      };
    case actions.GET_RANDOM_QUESTION:
      return {
        ...state,
        randomQuestion: payload.payload,
      };
    case actions.GET_LEADERBOARD_RANK:
      return {
        ...state,
        rankingList: payload.payload,
      };
    case actions.POST_GAME_POINTS:
      return {
        ...state,
      };
    case actions.POST_AUTHENTICATE_WITH_GOOGLE:
      return {
        ...state,
      };
    case actions.CLEAR_STATE:
      return {
        ...state,
        loggedUser: [],
      };
    case actions.CLEAR_STATE_USER_DETAIL:
      return {
        ...state,
        userDetail: [],
      };
    default:
      return state;
  }
}
