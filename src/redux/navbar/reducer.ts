import { GenresType } from "../types";
import { ActionsType, SET_NAVBAR_DATA } from "./actionsType";

type initialStateType = {
  genres: Array<GenresType>;
};

let initialState: initialStateType = {
  genres: [],
};

const navbarReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case SET_NAVBAR_DATA: {
      return {
        ...state,
        genres: action.payload,
      };
    }
    default:
      return state;
  }
};

export default navbarReducer;
