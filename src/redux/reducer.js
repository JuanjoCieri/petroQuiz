import * as actions from "./Actions/actionsTypes.js";

const initialState = {
  loggedUser: [
    {
      id: "bbY54SKLlCTvVO6GoCx8",
      imagen:
        "https://avatars.githubusercontent.com/u/100518547?s=400&u=a849a45f1772de56fb5cbe869a6dae3a76ee2b8b&v=4",
      nombre: "Juan José",
      email: "juin@hotmail.com.ar",
      puntos: 450,
    },
  ],
  randomQuestion: [],
  rankingList: [],
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
    default:
      return state;
  }
}
